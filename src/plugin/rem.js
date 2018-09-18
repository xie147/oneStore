/**
 * Created by Administrator on 2018/9/8.
 */
(function(doc,win){var htmlFont=function(){var docEl=doc.documentElement,l=docEl.clientWidth,f;f=l/7.5;l>750?docEl.style.fontSize=100+"px":docEl.style.fontSize=f+"px"};htmlFont();win.addEventListener("resize",htmlFont,false)})(document,window);
