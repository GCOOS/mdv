<%-- 
    Document   : Palettes
    Created on : Sep 18, 2014, 5:51:16 PM
    Author     : Harshul Pandav
--%>
<c:if test='${ncwms}'>
	<div id="mobPanelPalettes" data-role="panel" data-display="overlay" data-position="right">
		<ul data-role="listview" data-inset="true" data-shadow="false" data-divider-theme="a">
			<!--Title and close button-->
		    <li data-role="list-divider"><fmt:message key="ncwms.newpal" /></li>

			<%@include file="../../../Options/Palettes.jsp" %>  <%-- This page has all the calendars, the animaton divs  --%>
			
			<!--This is the draggable window with the current palette and color range options-->
			<%@include file="../../../Options/ColorRange.jsp" %>  <%-- This page has all the calendars, the animaton divs  --%>
		</ul>
	</div>
</c:if>
