import React from "react"
// import * as styles from "./styles"
import "./styles.css"
import GifUpload from "./GifUpload"

export default function App() {
  return (
    <div className="grid-container">
      <div className="upload">
        <h3>Upload Photo Form</h3>
        <GifUpload />
      </div>
      <div className="flex-container">
        <h3>image</h3>
        <h3>image</h3>
        <h3>image</h3>
        <h3>image</h3>
        <h3>image</h3>
        <h3>image</h3>
        <img></img>
      </div>
    </div>
  )
}
