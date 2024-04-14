// ==UserScript==
// @name        WikiMuchCustom
// @namespace   https://greasyfork.org
// @description Clean and minimal theme for new Wikipedia. Press F8 for dark mode.
// @author      Guillaume, forked by 17ms
// @version     3.3.5
// @downloadURL https://codeberg.org/ltguillaume/wikimuch/raw/main/wikimuch.user.js
// @icon        https://codeberg.org/ltguillaume/wikimuch/raw/main/logo.png
// @match       https://*.wikipedia.org/*
// @homepageURL https://greasyfork.org/scripts/31127
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @run-at      document-start
// ==/UserScript==

document.addEventListener("DOMContentLoaded", function() {
    //if (document.body.classList.contains("skin-vector-legacy"))
    //  document.location.search += "&useskin=vector-2022"

    darkMode()
    GM_addStyle(`
/* Light theme */
:root {
	--nav-bg:        				 #f1f1f1;
	--nav-text:      				 #333;
	--link-text:     				 #067bad;
	--main-bg:       				 #fafafa;
	--main-text:     				 #444;
	--main-border:   				 #bbb;
	--box-bg:        				 #f7f7f7;
	--box-bg2:       				 #fafafa;
	--box-head-bg:   				 #e7e7e7;
	--box-text:      				 #333;
	--box-border:    				 #e7e7e7;
	--navbox-border: 				 #fdfdfd;
	--background-color-base: #fff;
}

/* Dark theme */
:root.dark {
	--nav-bg:        				 #111110;
	--nav-text:      				 #888;
	--link-text:     				 #067bad;
	--main-bg:       				 #10100f;
	--main-text:     				 #999;
	--main-border:   				 #1c1c1b;
	--box-bg:        				 #111110;
	--box-bg2:       				 #10100f;
	--box-head-bg:   				 #1c1c1b;
	--box-text:      				 #888;
	--code-bg:			 				 #1c1c1b;
	--box-border:    				 #1c1c1b;
	--navbox-border: 				 #111110;
	--background-color-base: #10100f;
}

/* Main page container */
body, .mw-page-container {
	max-width: unset;
	margin: 0 !important;
	padding: 0 !important;
	background: var(--main-bg) !important;
	color: var(--main-text);
}

* {
	outline-color: var(--box-border) !important;
}

:focus {
	border-color: var(--box-border) !important;
	box-shadow: none !important;
}

/* Links */
a,
a:hover,
.vector-feature-page-tools-disabled .vector-main-menu-group .vector-menu-content li a,
.vector-feature-page-tools-disabled .vector-main-menu-action-item .vector-menu-content li a,
.skin-vector:not(.skin-vector-legacy) .wb-langlinks-link a,
.vector-toc .vector-toc-link,
.vector-menu-tabs .mw-list-item a,
.vector-pinnable-header-toggle-button,
.vector-pinnable-header-toggle-button:hover,
.vector-menu-tabs .mw-list-item a,
.mw-parser-output a.extiw, .mw-parser-output a.external {
	background-color: var(--background-color-base) !important;
	color: var(--link-text) !important;
}

/* Header, main menu, user menu, TOC */
.vector-feature-zebra-design-disabled .vector-header-container {
	max-width: 100%;
	padding: 0;
}

#mw-head {
  background-color: var(--background-color-base);
}

#vector-main-menu-dropdown {
	margin-left: 6px;
}

@media screen {
	.vector-dropdown .vector-dropdown-content {
		background-color: var(--main-border) !important;
	}
}

.mw-header,
.vector-feature-page-tools-disabled .vector-main-menu,
.vector-menu-content,
#mw-panel,
#mw-panel-toc,
#vector-toc-pinned-container,
.vector-toc,
.vector-toc .vector-toc-list-item-active > .vector-toc-link,
.vector-toc .vector-toc-level-1-active:not(.vector-toc-list-item-expanded) > .vector-toc-link,
.vector-toc .vector-toc-list-item-active.vector-toc-level-1-active > .vector-toc-link,
#vector-main-menu-pinned-container .vector-main-menu,
.navbox-title,
.mw-parser-output .tmbox,
.catlinks {
	color: var(--nav-text);
	background: var(--nav-bg) !important;
	border-color: var(--main-border) !important;
}

/* Content width when limited content width is toggled off */
.vector-feature-limited-width-disabled .mw-content-container {
		width: unset !important;
	}

/* TOC background and content padding for pages without a TOC */
.vector-feature-page-tools-disabled #mw-sidebar-checkbox:not(:checked) ~ .vector-sidebar-container-no-toc ~ #mw-panel-toc,
.vector-feature-page-tools-disabled .vector-toc-unpinned #mw-sidebar-checkbox:not(:checked) ~ #mw-panel-toc,
.vector-feature-page-tools-disabled.vector-toc-unpinned #mw-sidebar-checkbox:not(:checked) ~ #mw-panel-toc {
	background: unset !important;
}

body.action-edit main,
body.action-history main,
body.mw-special-Search main {
	padding: 1.25em !important;
}

/* Main menu button */
.mw-ui-icon-flush-right {
	margin-right: 0 !important;
	padding-left: 1.25em;
}

/* Search field */
.vector-search-box-input,
.cdx-text-input__input:enabled {
	color: var(--main-text);
	background-color: var(--main-bg);
	border-color: var(--main-border) !important;
	box-shadow: none !important;
}

/* Search button */
.cdx-button:enabled, .cdx-button.cdx-button--fake-button--enabled {
  background-color: var(--box-bg) !important;
  color: var(--main-text) !important;
  border-color: var(--box-border) !important;
}

/* Main menu, TOC */
.vector-feature-page-tools-disabled .vector-main-menu,
.vector-feature-page-tools-disabled #vector-toc-pinned-container .vector-toc,
.vector-toc .vector-toc-list-item-active > .vector-toc-link .vector-toc-text,
.vector-toc .vector-toc-level-1-active:not(.vector-toc-list-item-expanded) > .vector-toc-link .vector-toc-text,
.vector-toc .vector-toc-list-item-active.vector-toc-level-1-active > .vector-toc-link .vector-toc-text {
	width: 100%;
}

/* TOC */
.toc, .toccolours {
  background-color: var(--box-bg);
}

/* TOC text */
.tocnumber {
  color: var(--main-text);
}

body.vector-toc-pinned .mw-ui-icon-flush-left,
#vector-main-menu-pinned-container .vector-main-menu,
.vector-toc-pinned #mw-panel-toc,
.vector-feature-toc-pinned-enabled #mw-panel-toc,
.vector-feature-zebra-design-disabled.vector-feature-toc-pinned-clientpref-1 #mw-panel-toc {
	margin-left: 0 !important;
}

#vector-main-menu-pinned-container .vector-main-menu {
	margin-top: 0 !important;
}

/* Pinned Table of Contents */
body.vector-toc-pinned .mw-body-header {
	margin-top: 1.2rem;
}

.vector-feature-page-tools-disabled #vector-toc-pinned-container .vector-toc,
.vector-feature-page-tools-disabled #vector-toc-pinned-container .vector-toc::after {
	margin-left: 0;
}

/* Main menu button, language chooser */
.cdx-button:enabled.cdx-button--weight-quiet.cdx-button--action-progressive,
.cdx-button.cdx-button--fake-button--enabled.cdx-button--weight-quiet.cdx-button--action-progressive,
.mw-ui-button.mw-ui-icon-element:not(.mw-ui-icon-with-label-desktop),
input[type="checkbox"]:hover + .mw-ui-button.mw-ui-progressive.mw-ui-quiet,
.mw-ui-button.mw-ui-progressive.mw-ui-quiet,
.mw-ui-button.mw-ui-progressive.mw-ui-quiet:hover,
.mw-ui-button.mw-ui-progressive.mw-ui-quiet:focus,
.uls-language-block a {
	background: transparent;
	color: var(--link-text);
	border: none;
	box-shadow: none;
}

.mw-ui-button:not(.mw-ui-icon-element) {
	padding-right: 0;
}

/* Language chooser drop-down icon color when clicked */
.vector-page-titlebar .mw-portlet-lang .vector-menu-heading.mw-ui-progressive.mw-ui-quiet::after {
	background-image: url(/w/skins/Vector/resources/common/images/arrow-down-progressive.svg?f0b59) !important;
}

/* Language chooser icon, external links icon */
.mw-ui-icon-wikimedia-language-progressive::before,
.mw-parser-output a.external {
	background: none;
}

/* Language chooser drop-down menu */
.skin-vector .uls-menu {
	border-color: var(--box-border) !important;
}

.skin-vector .uls-filtersuggestion {
	color: var(--main-text) !important;
}

.uls-menu .uls-search {
	background-color: var(--box-bg) !important;
}

.uls-search-label {
	filter: invert(1);
}

.uls-filtersuggestion {
	background-color: var(--box-bg) !important;
}

.uls-lcd {
	background-color: var(--box-bg) !important;
}

#uls-settings-block.uls-settings-block--vector-2022.uls-settings-block--with-add-languages {
  background-color: var(--box-bg) !important;
  border-top: var(--box-border) !important;
}

/* Main content */
.mw-page-container-inner {
	column-gap: 0 !important;
}

.mw-content-container {
	min-width: unset;
	margin-left: 2.5em;
	margin-right: 2em;
}

/* Tabs */
.vector-menu-tabs .mw-list-item.selected a,
.vector-menu-tabs .mw-list-item.selected a:visited {
	color: var(--main-text);
}

/* Main text, tables/infoboxes */
#content.mw-body,
.client-js .vector-below-page-title .vector-page-titlebar-toc {
	background-color: var(--main-bg) !important;
	color: var(--main-text) !important;
	border-color: var(--main-border) !important;
}

/* Headers */
h1, h2, h3, h4, h5, h6 {
	color: var(--main-text);
}

/* Tables, boxes (.mw-parser-output > ...) */
.infobox,
.help-box,
.mw-message-box,
.navbox,
.navbox-subgroup,
.side-box,
.wikitable,
.thumbinner,
.module-shortcutboxplain {
	background-color: var(--box-bg) !important;
	color: var(--box-text) !important;
	border-color: var(--box-border) !important;
}

.wikitable *,
.navbox-even,
.navbox-abovebelow,
.navbox-image,
.navbox-list,
.mw-parser-output tr + tr > .navbox-group {
	border-color: var(--navbox-border) !important;
}

.wikitable th,
.navbox-even,
.navbox-abovebelow,
.infobox th.infobox-above,
.infobox th.infobox-header,
.navbox .navbox-group,
.sidebar-heading,
.sidebar {
	color: var(--nav-text) !important;
	background-color: var(--box-head-bg) !important;
}

/* Account links */
.vector-user-links {
	margin-right: 2em;
}

/* "Outline" colors */
input[type='checkbox']:focus,
.mw-ui-button.mw-ui-progressive.mw-ui-quiet:focus
.mw-ui-button.mw-ui-quiet:focus {
	border: none !important;
	box-shadow: inset 0 0 0 1px var(--main-border) !important;
}

.vector-menu-checkbox:focus,
.vector-menu-checkbox:focus + .vector-menu-heading {
	outline: none !important;
}

/* Adjust colors for icons */
img.noprint,
.oo-ui-iconElement-icon,
.vector-icon,
.vector-menu-checkbox::after,
.vector-dropdown > .vector-menu-heading::after {
	filter: invert(0.6);
}

html.dark img.noprint,
html.dark .oo-ui-iconElement-icon,
html.dark .vector-menu-checkbox::after,
html.dark .vector-dropdown > .vector-menu-heading::after {
	filter: grayscale(100%);
}

html.dark .mw-logo-wordmark,
html.dark .mw-logo-tagline,
html.dark .mw-ui-icon,
html.dark .searchButton {
	filter: invert(50%);
}

/* Footer padding */
.mw-footer-container {
	padding: 0;
}

.mw-footer {
	padding: 1em 1.25em !important;
}

/* Hide full width toggle, site notice, TOC overflow gradient, footer icons */
.vector-settings,
.vector-sitenotice-container,
#vector-toc-pinned-container .vector-toc::after,
#footer-icons {
	display: none !important;
}

/* Code snippets */
@media screen {
  pre, code, .mw-code {
    background-color: var(--code-bg);
    color: var(--box-text);
    border: 1px solid #eaecf0;
  }
}

/* Figures (File/Thumb, File/Frame) */
@media screen {
  figure[typeof~="mw:File/Thumb"], figure[typeof~="mw:File/Frame"] {
    border: 1px solid var(--box-border);
    background-color: var(--box-bg2);
  }
}

/* Figure caption */
@media screen {
  figure[typeof~="mw:File/Thumb"] > figcaption, figure[typeof~="mw:File/Frame"] > figcaption {
    border: 1px solid var(--box-border);
    background-color: var(--box-bg);
  }
}

/* Ambox */
.mw-parser-output .ambox {
  border: 1px solid var(--box-border) !important;
  background-color: var(--box-bg) !important;
}

/* Talk tab */
.mw-parser-output .wpbs .wpb-header {
	background-color: var(--box-bg) !important;
}

.mw-parser-output .wpbs .banner-shell-inner {
  background: var(--box-bg) !important;
}

/* Fix to darker SVG's on tables (might mess up some icons, but the content itself should be okay) */
@media screen {
  .infobox-full-data .mw-file-element,
  .wikitable .mw-file-element {
    filter: invert(1);
  }
}

/* Popup containers (with descriptions of the linked topic) */
.mwe-popups-container, .mwe-popups {
  background-color: var(--box-bg) !important;
}

/* Math symbols */
.mwe-math-element {
	filter: invert(1);
}

.equation-box {
  background-color: var(--box-bg) !important;
}
`)
})

document.addEventListener("keydown", function(e) {
    if (e.key == "F8") {
        e.preventDefault()
        GM_setValue("darkMode", !GM_getValue("darkMode") || false)
        darkMode()
    }
})

function darkMode() {
    if (GM_getValue("darkMode")) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
}
