import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['preview']

  reset() {
    this.previewTarget.textContent = ''
    this.element.reset()
  }
  preview(e) {
    const value = event.target.value
    this.previewTarget.textContent = value
  }
}
