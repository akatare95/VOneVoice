
/**************************************************
 Global ui service intialization and Fail over
 ***************************************************/
var vzGuiPoll;
var vzGuiTimeout = 5; // 5 seconds timeout
var vzGuiScript = document.createElement('script');
vzGuiScript.type = 'text/javascript';
vzGuiScript.src = 'https://globalui.verizon.com/header/globaluiBase';
document.body.appendChild(vzGuiScript);
var isGlobaluiLoaded = false;
vzGuiPoll = function () {
	setTimeout(function () {
		vzGuiTimeout--;
		if (typeof VZGLOBALUILoaded !== 'undefined') {
			isGlobaluiLoaded = true;
		}
		else if (!isGlobaluiLoaded && vzGuiTimeout > 0) {
			vzGuiPoll();
		}
		else if (!isGlobaluiLoaded && vzGuiTimeout == 0) {

			var dupGlobalHeader = document.getElementsByClassName("vz-gui-global-header-server");
			if(dupGlobalHeader[0]==null){
				document.body.removeChild(vzGuiScript);
				var vzGuiScriptLocal = document.createElement('script');
				vzGuiScriptLocal.type = 'text/javascript';
				vzGuiScriptLocal.src = '../vz-components/vz-global-ui/scripts/globalui.js';
				document.body.appendChild(vzGuiScriptLocal);
			}

		}
	}, 1000);
};

vzGuiPoll();