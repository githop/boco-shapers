/**
 * Created by githop on 11/1/16.
 */
var BocoShapers = (function () {
    function BocoShapers() {
        this.bocoLogo = document.querySelector('.boco__logo');
        this.bocoFlipper = document.querySelector('.flipper__panel');
        this.ripple = document.querySelector('.ripple');
    }
    BocoShapers.prototype.setup = function () {
        var _this = this;
        this._addEventListeners();
        requestAnimationFrame(function () { return _this._setSize(); });
    };
    BocoShapers.prototype._addEventListeners = function () {
        this.bocoLogo.addEventListener('click', this.click.bind(this));
        this.ripple.addEventListener('click', this.click.bind(this));
        window.addEventListener('resize', this._setSize.bind(this));
    };
    BocoShapers.prototype._setSize = function () {
        var position = this.ripple.getBoundingClientRect();
        var midX = position.left + position.width * 0.5;
        var midY = position.top + position.height * 0.5;
        var rX = Math.max(midX, window.innerWidth - midX);
        var rY = Math.max(midY, window.innerHeight - midY);
        var radius = Math.sqrt(rX * rX + rY * rY);
        this.ripple.style.width = radius * 2 + "px";
        this.ripple.style.height = radius * 2 + "px";
    };
    BocoShapers.prototype.click = function () {
        this.bocoFlipper.classList.toggle('flip');
        this.ripple.classList.toggle('extended');
    };
    return BocoShapers;
}());
//# sourceMappingURL=bocoShapers.js.map