// 代码块语言识别

$(function () {
  var $highlight_lang = $('<div class="code_lang" title="代码语言" aria-hidden="true"></div>');
  
  $('pre').after($highlight_lang);
  $('pre').each(function () {
    var lang_name = $('pre code').attr('class').split('-')[1];

    // 首字母大写
    lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);
    $('pre').siblings(".code_lang").text(lang_name);
  });
});
