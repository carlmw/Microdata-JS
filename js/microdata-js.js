var MicrodataJS = {
	
	/**
	 * Contains all of the DOM elements
	 */
	_allDom: null,
	
	_getAllDom: function () {
		if (!MicrodataJS._allDom) {
		 	MicrodataJS._allDom = document.getElementsByTagName('*');
		}
		return MicrodataJS._allDom;
	},
	
	/**
	 * Gets all of the elements that have an itemType
	 * param itemTypes - whitespace-separated string of types to match
	 */
	getItems:  function (itemTypes) {
		
		var all = MicrodataJS._getAllDom();
		var matches = new Array();
		
		itemTypes = itemTypes?itemTypes.split(/\s+/):[];
		
		for (var i = all.length-1; i>=0; i--) {
			
			var node = all.item(i);
			var type = node.getAttribute('itemType');
			
			if(type) {
				if (0==itemTypes.length) {
					matches.push(node);
				}
				for (var j=itemTypes.length-1; j>=0; j--)
				{
					if(itemTypes[j]==type) {
						matches.push(node);
					}
				}
			}
			
		}
		
		// is there a way to cast to NodeList
		return matches;
	}
}

if(!document.getItems) {
	
	document.getItems = MicrodataJS.getItems;
	
}