function removeRedundantSpaces(text_for_Editing)
{
var extraSpaces = new RegExp("[ ]{2,}","g");
return text_for_Editing.replace(extraSpaces," ");

<input type="text" onblur="this.value=removeRedundantSpaces(this.value);">