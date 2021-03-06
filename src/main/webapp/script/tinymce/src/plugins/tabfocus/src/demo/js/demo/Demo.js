/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*eslint no-console:0 */

define(
  'tinymce.plugins.tabfocus.demo.Demo',
  [
    'tinymce.core.EditorManager',
    'tinymce.plugins.code.Plugin',
    'tinymce.plugins.tabfocus.Plugin',
    'tinymce.themes.modern.Theme'
  ],
  function (EditorManager, CodePlugin, TabFocusPlugin, ModernTheme) {
    return function () {
      CodePlugin();
      TabFocusPlugin();
      ModernTheme();

      EditorManager.init({
        selector: "textarea.tinymce",
        plugins: "tabfocus code",
        toolbar: "code",
        skin_url: "../../../../../skins/lightgray/dist/lightgray",
        height: 600
      });
    };
  }
);