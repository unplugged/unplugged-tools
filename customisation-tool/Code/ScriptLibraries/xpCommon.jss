/**
 * The top level menut items which will appear for anonymous users
 */
var TOPMENUITEMS = [
	{"title": "Home", "link": "/home.xsp", "controlpanelconfig": null} 
];

/**
 * The top level menu items which will appear for authenticated users
 */
var TOPMENUITEMSUSER = [
	{"title": "Home", "link": "/home.xsp", "controlpanelconfig": null} 
];


/**
 * Returns the name of the current XPage so for example
 * http://myserver/mydb.nsf/MyXPage.xsp will return /MyXPage.xsp
 */
function getCurrentXPage() {
	if (!viewScope.containsKey("currentxpage")) {
		var url = context.getUrl();
		url = @Left(url, ".xsp") + ".xsp";
		url = @Right(url, ".nsf/");
		viewScope.currentxpage = "/" + url;
	}
	return viewScope.currentxpage;
}

/**
Cache the dbPath variables in an applicationScope variable
*/
function getDbPath() {
	if (isCacheInvalid("dbpathweb", 5)) {
		synchronized(applicationScope) {
			var dbPath = @Left(context.getUrl(), ".nsf") + ".nsf";
			var pos = (context.isRunningContext("Notes")) ? 4 : 3;
			var secondPathElements = dbPath.split("/");
			var secondPath = "";
			for (pos; pos < secondPathElements.length; pos++) {
				if (secondPath != "") secondPath += "/";
				secondPath += secondPathElements[pos];
			}
			var res: Array = new Array();
			res.push(dbPath);
			res.push(secondPath);
			applicationScope.dbPathWeb = res;
		}
	}
	return applicationScope.dbPathWeb[0];
}
/**
A generic caching mechanism for each key will check to see if it is 'n' seconds
since it was last updated. Use for things that change relatively infrequently  
*/
function isCacheInvalid(key, cacheInterval) {
	var currentTime = new Date().getTime();
	if (!applicationScope.containsKey(key + "_time")) {
		applicationScope.put(key + "_time", currentTime);
		return true;
	}
	var diffInSecs = Math.ceil((currentTime - applicationScope.get(key + "_time")) / 1000);
	if (diffInSecs < cacheInterval) {
		return false;
	} else {
		applicationScope.put(key + "_time", currentTime);
		return true;
	}
}

/**
 * Returns the UNID of the control panel config document
 * If the document doesn't exist then it is created
 */
function getControlPanelUNID(){
	return controlpanelBean.getUnid();
}

/**
 * Works out the URL to get to the current user's attendee document
 */
function getProfileURL(){
	return getDbPath() + "/profile.xsp?action=editDocument&documentId=" + sessionScope.profileunid;
}

/**
Date Converter code taken from Tommy Valand's blog:
http://dontpanic82.blogspot.com/2010/04/xpages-code-snippet-for-datestring.html
*/
var DateConverter = {
 dateToString: function( date:java.util.Date, pattern:String ){
  try {
   if( !date ){ return ''; }
  
   var formatter = DateConverter.getFormatter( pattern );
   return formatter.format( date );
  } catch( e ){
   // ErrorHandling
  }
 },
 
 stringToDate: function( dateString:String, pattern:String ){
  try {
   if( !dateString ){ return null; }
  
   var formatter = DateConverter.getFormatter( pattern );
   return formatter.parse( dateString );
  } catch( e ){
   // ErrorHandling
  }
 },
 
 getFormatter: function( pattern:String ){
  try {
   var cacheKey = 'dateFormatter' + pattern;
   var dateFormatter = applicationScope[ cacheKey ];
   if( !dateFormatter ){
    dateFormatter = new java.text.SimpleDateFormat( pattern );
    applicationScope[ cacheKey ] = dateFormatter;
   }
   
   return dateFormatter;
  } catch( e ){
   // ErrorHandling
  }
 } 
}

/**
 * Converts any object into an array
 */
function $A( object ){
	 // undefined/null -> empty array
	 if( typeof object === 'undefined' || object === null ){ return []; }
	 if( typeof object === 'string' ){ return [ object ]; }
	 
	 // Collections (Vector/ArrayList/etc) -> convert to Array
	 if( typeof object.toArray !== 'undefined' ){
	  return object.toArray();
	 }
	 
	 // Array -> return object unharmed 
	 if( object.constructor === Array ){ return object; }  
	 
	 // Return array with object as first item
	 return [ object ];
}