/*

    TODO:
    1. Add event listeners for sidebar
        2. Always have one section open in accordion
        3. Add +/- to open/closed sections
        4. Add extra submenus, populate with content
            <-> Node Labels
            <-> Node Size
            <-> Node Colour
            <-> Edge Size
            <-> Edge Colour
            <-> Export

*/


class menu {
	constructor(element) {
		this.domElement = document.createElement("div");
        this.domElement.innerHTML = this.generateHTML();

        element.appendChild(this.domElement);

        var accOpen = 0;
        var accItem = this.domElement.getElementsByClassName("accordion-item");
        var accHD = this.domElement.getElementsByClassName("accordion-item-heading");
        for(let i=0; i<accHD.length; i++) {
            accHD[i].addEventListener('click', function() {
                //Toggle accordian items
                if(accOpen != i) {
                    accItem[accOpen].className = 'accordion-item close';
                    accOpen = i;
                    accItem[accOpen].className = 'accordion-item open';
                }
            }, false);
        }

        this.eventSystem = new event();
        var nodecolor = document.getElementById("node-color");
        var nodeGradPicker = new gradientPicker(nodecolor, (steps) => this.eventSystem.invokeEvent("onNodeGradientChange", steps));
    }

    generateHTML() {
        return /*html*/`
        <div class="unselectable sidenav" style="width: 250px; height: 500px; position: absolute; top: 0px;">
            <br>

            <h1 class="subsection-heading">Node Settings</h1>
            <hr>
            <div class="accordion-wrapper">
                <div class="accordion-item open">
                    <h4 class="accordion-item-heading">Size</h4>
                    <div id="node-size" class="accordion-item-content">
                        Options for size functions go here..
                    </div>
                </div>

                <div class="accordion-item close">
                    <h4 class="accordion-item-heading">Colour</h4>
                    <div id="node-color" class="accordion-item-content"></div>
                </div>

                <div class="accordion-item close">
                    <h4 class="accordion-item-heading">Label</h4>
                    <div class="accordion-item-content">
                        <form action="">
                            <input type="radio" name="labeltype" value="name" checked>Name<br>
                            <input type="radio" name="labeltype" value="size">Size<br>
                            <input type="radio" name="labeltype" value="none">None
                        </form>
                    </div>
                </div>
            </div>
            <hr>
            <h1 class="subsection-heading">Edge Settings</h1>
            <hr>
            <div class="accordion-wrapper">
                <div class="accordion-item close">
                    <h4 class="accordion-item-heading">Size</h4>
                    <div class="accordion-item-content">
                        Options for size functions go here..
                    </div>
                </div>

                <div class="accordion-item close">
                    <h4 class="accordion-item-heading">Colour</h4>
                    <div class="accordion-item-content">
                        Options for colour source go here..
                    </div>
                </div>
            </div>
            <hr>
            <h1 class="subsection-heading">Graph Settings</h1>
            <hr>
            <div class="accordion-wrapper">
                <div class="accordion-item close">
                    <h4 class="accordion-item-heading">Export graph</h4>
                    <div class="accordion-item-content">
                        <input type="radio" name="graphtype" value="png" checked>PNG<br>
                        <input type="radio" name="graphtype" value="jpeg">JPEG<br><br>
                        <a href="#" class="myButton">Export Graph</a>
                    </div>
                </div>
            </div>

        </div>`;
    }

}

// Code for the base format..
/*
<div class="unselectable sidenav" style="width: 250px; height: 500px; position: absolute; top: 0px;">
            <br>
            <div class="closebtn">✕</div>
            <div class="setting light">Select Color Source:</div>
            <select id="options" class="setting">
                <option value="x">x</option>
                <option value="y">y</option>
            </select>
            <br>
            <div class="setting light">Node label as:</div>
            <select class="setting">
                <option value="name">Name</option>
                <option value="size">Size</option>
                <option value="none">None</option>
            </select>
            <br>
            <a class="button setting light" value="Export Graph">Export Graph</a>
            <select id="selectorExport" class="setting">
                <option value="JPEG">JPEG</option>
                <option value="PNG">PNG</option>
            </select>
            <br>
        </div>`/*
            <div class="setting light">Selected Node:</div>
            <table id="table" style="display: none;">
            <thead>
                <tr>
                    ${options.map(o => `<th>${o}</th>`)}
                </tr>
            </thead>
            <tbody>
                ${("<tr>" + "<td></td>".repeat(tableCols) + "</tr>").repeat(tableRows)};
            </tbody>
            </table>
        </div>
        `* /
*/


// Code for the initial accordion format..
/*
        <div class="unselectable sidenav" style="width: 250px; height: 500px; position: absolute; top: 0px;">
            <br>
            <div class="closebtn">✕</div>
            <div class="panel-group" id="accordion">
            	<div class="panel panel-default">
            		<div class="panel-heading">
            			<h4 class="panel-title">
            				<a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Select colour source:</a>
            			</h4>
            		</div>
            		<div id="collapse1" class="panel-collapse collapse in">
            			<div class="panel-body">
            				Options for colour source go here..
            			</div>
            		</div>
            	</div>
            	<hr>
            	<div class="panel panel-default">
            		<div class="panel-heading">
            			<h4 class="panel-title">
            				<a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Node label as:</a>
            			</h4>
            		</div>
            		<div id="collapse2" class="panel-collapse collapse">
            			<div class="panel-body">
            				Options for node labels go here..
            			</div>
            		</div>
            	</div>
            	<hr>
            	<div class="panel panel-default">
            		<div class="panel-heading">
            			<h4 class="panel-title">
            				<a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Export Graph</a>
            			</h4>
            		</div>
            		<div id="collapse3" class="panel-collapse collapse">
            			<div class="panel-body">
            				Options for exporting graph go here..
            			</div>
            		</div>
            	</div>
            	<hr>
            </div>
        </div>`
*/