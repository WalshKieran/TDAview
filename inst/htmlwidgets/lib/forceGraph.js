class forceGraph extends THREE.Group {
    constructor(data, adjacency, colormap) {
        super();
        var self = this;
        this.initiallizing = true;

        function onNodeDragStart() {
            self.simulation.alphaTarget(0.3).restart();
            self.initiallizing = false;
        }
    
        function onNodeDrag(node, vector) {
            node.fx = vector.x;
            node.fy = vector.y;
        }
    
        function onNodeDragEnd(node) {
            self.simulation.alphaTarget(0);
            node.fx = node.fy = null;
        }
        
        //Create nodes as single mesh
        node.intMaterial(colormap);
        this.nodes = new Array(data.length);
        for(let i=0; i<data.length; i++) {
            this.nodes[i] = new node(i, "Node " + i, data[i], 0.0, this);
            this.nodes[i].eventSystem.addEventListener("OnDragStart", onNodeDragStart);
            this.nodes[i].eventSystem.addEventListener("OnDrag", onNodeDrag);
            this.nodes[i].eventSystem.addEventListener("OnDragEnd", onNodeDragEnd);
        }

        //Create links as separate meshes
        this.links = [];
        link.initMaterial(colormap);
        for(let i=0; i<adjacency[0].length; i++) {
            let row = adjacency[i];
            for(let j=0; j<row.length; j++) {
                if(row[j]) {
                    this.links.push(new link(this.nodes[i], this.nodes[j], this));
                }
            }
        }

        //Initiallise event system
        this.eventSystem = new event();
        this.eventSystem.addEventListener("onTick", this.updatePositions.bind(this));

        //Initiallise simulation
        this.simulation = d3.forceSimulation(this.nodes)
            .force("link", d3.forceLink(this.links))
            .force('center', d3.forceCenter())
            .force("charge", d3.forceManyBody().strength(-1000))
            .on("tick", function() {
                this.eventSystem.invokeEvent("onTick");
            }.bind(this))
            .on("end", function() {
                this.initiallizing = false;
                this.eventSystem.invokeEvent("onEnd");
            }.bind(this));
    }

    getBoundingBox() {
        var box = new THREE.Box3();
        for(let i=0; i<this.nodes.length; i++) {
            //TODO something in model matrix is broken? expandByObject AND setFromObject don't work
            box.expandByPoint(this.nodes[i].getPosition());
        }
        //TODO fix hardcoded margin
        box.expandByScalar(100);
        return box;
    }
    
    updatePositions() {
        //Update node positions
        for(var i=0; i<this.nodes.length; i++) {
            this.nodes[i].setPosition(this.nodes[i].x, this.nodes[i].y);
        }

        //Update link positions
        for(var i=0; i<this.links.length; i++) {
            this.links[i].setPositionFromNodes();
            this.links[i].updatePosition();
        }
    }
}