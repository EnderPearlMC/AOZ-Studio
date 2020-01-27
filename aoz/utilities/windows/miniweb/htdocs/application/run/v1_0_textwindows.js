/*@****************************************************************************
*
*   █████╗  ██████╗ ███████╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
*  ██╔══██╗██╔═══██╗╚══███╔╝    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
*  ███████║██║   ██║  ███╔╝     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
*  ██╔══██║██║   ██║ ███╔╝      ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
*  ██║  ██║╚██████╔╝███████╗    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
*  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ 
*
****************************************************************************@*/
//
// The Text Window Instructions
// By Francois Lionet
// Version 0.99
// 11/11/2019
// (c) AOZ Studio 2019
//
// Compiled with AOZ Transpiler Version 0.9.3.1 - 21/01/2020 on the 27/01/2020-18:37:23
//

function v1_0_textwindows( aoz )
{
	this.manifest=JSON.parse('{"version":"8","versionModule":"1","infos":{"applicationName":"The Text Window Instructions","author":"By Francois Lionet","version":"Version 0.99","date":"11/11/2019","copyright":"(c) AOZ Studio 2019","start":"textwindows.aoz","object":"textwindows"}}');
	this.parent=this;
	this.root=this;
	this.aoz=aoz;
	this.contextName='v1_0_textwindows';

	this.blocks=[];
	this.blocks[0]=function()
	{
		// #warning_off:"instruction_not_implemented"
		// Javascript
		this.aoz.moduleTextWindows = this;
		// End Javascript
	};
	this.blocks[1]=function()
	{
		return{type:0}
	};
	this.aoz.run(this,0,null);
};
