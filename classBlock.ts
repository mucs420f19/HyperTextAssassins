class classBlock {
	private name : string;
	private vars : string[] = new Array();
	private funs : string[] = new Array();
	private parent: string = null;
	private children : string[][] = new Array();

	constructor (name : string) {
		this.name = name;
	}
		
	/** print () returns string
	 * Prints formatted contents of class called from
	**/
	print() {
		let classOut : string = "Class : " + this.name;
		if (this.vars.length > 0) {
			classOut += " Variables :";
			this.vars.forEach(function(i) {
				classOut += " " + i; 
			});
		}
		if (this.funs.length > 0) {
			classOut += " Functions :";
			this.funs.forEach(function(i) {
				classOut += " " + i; 
			});
		}
		if (this.parent != null) {
			classOut += " Parent : " + this.parent;
		}
		if (this.children.length > 0 ) {
			classOut += " Children :";
			this.children.forEach(function(i) {
				classOut += " " + i[0] + "(" + i[1] + ")";
			});
		}
		return classOut;
	}

	/** setName (string) returns string
	 * Returns the name of the class called from
	**/
	getName()
	{
		return this.name;
	}

	/** setName (string) returns bool
	 * Sets the name of the class called from
	**/
	setName(name : string)
	{
		this.name = name;
		return true;
	}

	/** setVar (string) returns bool
	 * Creates a new variable in a classBlock
	**/
	setVar(vari : string) {
		if (this.isVar(vari))
			return false;
		this.vars.push(vari);
		return true;
	}

	/** isVar (string) returns bool
	 * checks if a variable exists inside a classBlock
	**/
	isVar(vari : string) {
		return (this.vars.indexOf(vari) != -1);
	}

	/** removeVar (string) returns string
	 * Removes a variable from a classBlock
	**/
	removeVar(vari : string) {
		let index = this.vars.indexOf(vari);
		if (index == -1)
			return false;
		this.vars.splice(index, 1);
		return true;
	}

	/** setFun (string) returns bool
	 * Creates a new function in a classBlock
	**/
	setFun(func : string) {
		if (this.isFun(func))
			return false;
		this.funs.push(func);
		return true;
	}

	/** isFun (string) returns bool
	 * checks if a function exists inside a classBlock
	**/
	isFun(func : string) {
		return (this.funs.indexOf(func) != -1);
	}

	/** removeFun (string) returns string
	 * Removes a function from a classBlock
	**/
	removeFun(func : string) {
		let index = this.funs.indexOf(func);
		if (index == -1)
			return false;
		this.funs.splice(index, 1);
		return true;
	}

	/**
	 * Allows you to set the parent of the classblock.
	 * @param parent 
	 */
	setParent(parent: string)
	{
		this.parent = parent;
		return true;
	}

	/**
	 * Set the current parent to NULL.
	 */
	removeParent()
	{
		this.parent = null;
		return true;
	}

	/**
	 * Returns the parent of the classblock.
	 */
	getParent()
	{
		return this.parent;
	}
	/**
	 * Allows you to add a classblock to the children's array.
	 * @param child 
	 */
	addChild(child: string, relationship: string)
	{
		this.children.push([child, relationship]);
		return true;
	}
	/**
	 * Returns the children of the classblock.
	 */
	getChildren() 
	{
		return this.children;
	}

	/**
	 * Returns the index of a child.
	 * @param child 
	 */
	getChildIndex(child: string)
	{
		if (this.children.length < 1) {
			return -1;
		}
		for (var c in this.children) {
			if (this.children[c][0] === child) {
				return c
			}
		}
	}

	/**
	 * Removes a specific child from the childrens array.
	 * @param child 
	 */
	removeChild(child: string)
	{
		var index = this.children.indexOf([child]);
		this.children.splice(index, 1);
		return true;
	}
}
