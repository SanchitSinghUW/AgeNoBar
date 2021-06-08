function myFunction() {
  let folder = DriveApp.getFoldersByName("Human_Benchmark").next()
  let inner = folder.getFolders()
  let train = inner.next()
  let test = inner.next()
  let train_files = train.getFiles()
  files = []
  let id = "1yPCvFIShSoWz5SdoJNJ-mGF-ePrNiVUS3sRF6tutJzM"
  let presentation = SlidesApp.openById("1yPCvFIShSoWz5SdoJNJ-mGF-ePrNiVUS3sRF6tutJzM");
  let idx = 3
  while (train_files.hasNext()) {
    idx++;
    presentation.appendSlide()

    // add text
    file = train_files.next()
    person = file.getName().split("_")[0]
    presentation.getSlides()[idx].insertTextBox(person, 0, 0, 350, 150)

    // add image
    let added = presentation.getSlides()[idx].insertImage(file);
    var imgWidth = added.getWidth();
    var imgHeight = added.getHeight();
    var pageWidth = presentation.getPageWidth();
    var pageHeight = presentation.getPageHeight();
    var newX = pageWidth/2. - imgWidth/2.;
    var newY = pageHeight/2. - imgHeight/2.;
    added.setLeft(newX).setTop(newY);
    Logger.log(idx)
  }
}

//myFunction()