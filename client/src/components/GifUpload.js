import React from "react"

const GifUpload = () => {
  //   const previewFile = () => {
  //     const preview = document.querySelector("img")
  //     const file = document.querySelector("input[type=file]").files[0]
  //     const reader = new FileReader()

  //     reader.addEventListener(
  //       "load",
  //       function () {
  //         preview.src = reader.result
  //       },
  //       false
  //     )

  //     if (file) {
  //       reader.readAsDataURL(file)
  //     }
  //   }
  //   const uploadBtn = document.querySelector("input[type=file]")
  //   const fileChosen = document.querySelector("span")
  //   uploadBtn.addEventListener("change", function () {
  //     fileChosen.textContent = this.files[0].name
  //     if (fileChosen.textContent == null) {
  //       fileChosen.textContent = "Select A Photo"
  //     }
  //   })

  return (
    <div>
      <div>
        <input
          type="file"
          id="gif-upload-btn"
          onchange="previewFile()"
          hidden
        />
        <label for="gif-upload-btn">
          <span id="file-chosen">Select A Photo</span>
        </label>
      </div>
      <div>
        <input
          className="upload-photo-btn"
          type="submit"
          value="upload photo"
        />
      </div>
    </div>
  )
}
export default GifUpload
