/**
 * Created by githop on 11/1/16.
 */


class BocoShapers  {
  bocoLogo;
  bocoFlipper;
  ripple;
  constructor() {
    this.bocoLogo = document.querySelector('.boco__logo');
    this.bocoFlipper = document.querySelector('.flipper__panel');
    this.ripple = document.querySelector('.ripple');
  }

  setup() {
    this._addEventListeners();
    requestAnimationFrame(() => this._setSize());
  }

  _addEventListeners() {
    this.bocoLogo.addEventListener('click', this.click.bind(this));
    this.ripple.addEventListener('click', this.click.bind(this));
    window.addEventListener('resize', this._setSize.bind(this));
  }

  _setSize() {
    const position = this.ripple.getBoundingClientRect();
    const midX = position.left + position.width * 0.5;
    const midY = position.top + position.height * 0.5;

    const rX = Math.max(midX, window.innerWidth - midX);
    const rY = Math.max(midY, window.innerHeight - midY);

    const radius = Math.sqrt(rX * rX + rY * rY);
    this.ripple.style.width = `${radius * 2}px`;
    this.ripple.style.height = `${radius * 2}px`;
  }

  click() {
    this.bocoFlipper.classList.toggle('flip');
    this.ripple.classList.toggle('extended');
  }

}