goog.provide('owgis.ncwms.animation.status');

// Is the animation status it can be:
// 		none -> There is not animation or is being stopped
// 		loading -> The animation is being requested but not all of the frames have loaded
//		playing -> Animation is being played at current speed
//		pause   -> Animation paused
owgis.ncwms.animation.status.loading = "loading"; 
owgis.ncwms.animation.status.loadingplaying = "loading_playing"; 
owgis.ncwms.animation.status.playing = "playing"; 
owgis.ncwms.animation.status.none = "none"; 
owgis.ncwms.animation.status.paused = "paused"; 
owgis.ncwms.animation.status.current = owgis.ncwms.animation.status.none;

/**
 * The resolution of the animation depends on the size of the screen. Assuming
 * that if you have a larger screen then you will have a better internet 
 * @returns {Number}
 */
window['owgis.ncwms.animation.status.getResolutionRatio'] = owgis.ncwms.animation.status.getResolutionRatio;
owgis.ncwms.animation.status.getResolutionRatio = function getResolutionRatio(){
	var selectedRes = $("[name=video_res]:checked").val(); 
	switch(selectedRes){
		case "high":
			//2016-07-28 changed by bob.currier@gcoos.org to .85 from .55
			//This was causing high res to show as normal
			return .85;
			break;
		case "normal":
			return .85;
			break;
		case "low":
			return .85;
			break;
	}
}

window['owgis.ncwms.animation.status.getResolutionRatioCurrents'] = owgis.ncwms.animation.status.getResolutionRatioCurrents;
owgis.ncwms.animation.status.getResolutionRatioCurrents = function getResolutionRatioCurrents(){
	var selectedRes = $("[name=video_res]:checked").val(); 
	switch(selectedRes){
		case "high":
			return .85;
			break;
		case "normal":
			return .85;
			break;
		case "low":
			return .85;
			break;
	}
}
