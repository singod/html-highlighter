var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"function"==typeof define&&define.amd?define(e):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=e():t.highlighter=e()}(this,function(){"use strict";return{htmlEncode:function(t){var e="";return 0==t.length?"":(e=t.replace(/&/g,"&gt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=e.replace(/\'/g,"&#39;"),e=e.replace(/\"/g,"&quot;"))},htmlDecode:function(t){var e="";return 0==t.length?"":(e=t.replace(/&gt;/g,"&"),e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">"),e=e.replace(/&nbsp;/g," "),e=e.replace(/&#39;/g,"'"),e=e.replace(/&quot;/g,'"'),e=e.replace(/<br>/g,"\n"))},highlight:function(t){function e(t,e){var n="";return t&&(n=t.split(/\r\n|\n/).map(function(t){return t.replace(/^(\s*)(.*?)(\s*)$/,'$1<span class="html '+r[e]+'">$2</span>$3')}).join("\n")),n}var n=/(<!)(doctype.*?)(>)/,a=/(<\/?)(\w+)(?:.)*(\/?>)/,r=(new RegExp(this.htmlEncode(n.source+"|"+a.source),"gi"),["doctype start","doctype content","doctype end","tag start","tag name","tag end","tag attribute-name","tag brackets","tag attribute-value","tag attribute-value-quote","annotate start","annotate content","annotate end"]),l=this.htmlEncode(t).replace(/(&lt;!)(doctype.*?)(&gt;)/gi,'<span class="html '+r[0]+'">$1</span><span class="html '+r[1]+'">$2</span><span class="html '+r[2]+'">$3</span>').replace(/(&lt;\/?)([\w-]+)([\s\S]*?)(\s*)(\/?&gt;)/gi,function(){var t=arguments;return t[3]=t[3].replace(/(\s+)([^\s=]+)(\s+|$)/gi,'$1<span class="html '+r[6]+'">$2</span>$3').replace(/(\s+)([a-zA-z\-]+)(=)((?!(?:&quot;|&#39;|\s|\'|\")))([^\s=]+)(\s+|$)/gi,function(){var t=arguments;return t[1]+e(t[2],6)+e(t[3],7)+e(t[4],9)+e(t[5],8)+t[6]}).replace(/(\s+)([a-zA-z\-]+)(=)((?:&quot;)|(?:&#39;))([\s\S]*?)(\4)/gi,function(){var t=arguments;return t[1]+e(t[2],6)+e(t[3],7)+e(t[4],9)+e(t[5],8)+e(t[6],9)}),t[1]=e(t[1],3),t[2]=e(t[2],4),t[5]=e(t[5],5),t[1]+t[2]+t[3]+t[4]+t[5]}).replace(/(&lt;!--)([\S\s]+?)(--&gt;)/gi,function(){var t=arguments,n=t[2].split(/\r\n|\n/);return t[2]='<span class="html '+r[11]+'">'+n.join('</span>\r\n<span class="html '+r[11]+'">')+"</span>",e(t[1],10)+t[2]+e(t[3],12)});return l='<ol class="highlighter-ol"><li>'+l.replace(/\r\n|\n/gi,"</li><li>")+"</li></ol>"}}});