function clearTextFromHTMLTags(textForEditing)
{
var tagTemplate = new RegExp("</?[a-zA-Z]{1,}/?>","g");
return textForEditing.replace(tagTemplate,"");
}
<textarea rows="20" cols="20" id="editor">
<html>
<i>some text</i>
<b>some text</b>
<br>
<br>
<br>
</html>
</textarea >
<input type="button" value="Clear text" onclick="document.getElementById('editor').value=clearTextFromHTMLTags(document.getElementById('editor').value);" >
    </input>