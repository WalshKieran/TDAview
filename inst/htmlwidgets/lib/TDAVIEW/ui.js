class menu {
	constructor(element) {
		this.domElement = document.createElement("div");
        this.domElement.innerHTML = this.generateHTML();
	}

	generateHTML() {
		return /*html*/`
        <div class="unselectable sidenav" style="width: 250px; height: 500px; position: absolute; top: 0px;">
            <br>

            <div class="accordion-wrapper">
            	<div class="accordion-item close">
            		<h4 class="accordion-item-heading">Select colour source</h4>
            		<div class="accordion-item-content">
            			Options for colour source go here..
            		</div>
            	</div>

            	<div class="accordion-item close">
            		<h4 class="accordion-item-heading">Node label as</h4>
            		<div class="accordion-item-content">
            			<form action="">
            				<input type="radio" name="labeltype" value="name" checked>Name<br>
            				<input type="radio" name="labeltype" value="size">Size<br>
            				<input type="radio" name="labeltype" value="none">None
            			</form>
            		</div>
            	</div>

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