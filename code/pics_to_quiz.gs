function myFunction() {
  var existingForm = FormApp.openById('1zH5cRdKRJw3FRoDYr2tAbS9CQgbV9e8c5MER-stP1mg');
  let idx = 0
  let max = 50
  while (idx < max) {
    var item = existingForm.addMultipleChoiceItem();
    item.setRequired(true);
    item.setPoints(1);
    idx++;
    item.setTitle('Who is this?')
      .setChoices([
          item.createChoice('AgnezMo'),
          item.createChoice('Mallory'),
          item.createChoice('Justin-Bieber'),
          item.createChoice('Raven-Samone'),
          item.createChoice('Sanchit'),
          item.createChoice('Other'),
      ])
  }
}
