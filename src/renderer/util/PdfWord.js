import { Word } from 'pdf-officegen'
const word = new Word()
console.log(word)
console.log(word.convertFromPdf)
class PdfWord {
  static change (path) {
    word.convertFromPdf(path, {engine: 'mupdf'}, (err, result) => {
      if (err) {
        console.error(err)
      }
      console.log(result)
    })
  }
}
export default PdfWord
