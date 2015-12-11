;(function SEELE (_this) {
    var _hiddenCouncil = {}
      , _agents = {}

    function _cyanideTooth (_agent) {
        var _i = _agents.indexOf(_agent)
        _agents.splice(_i, 1)
    }

    var seele = {}

    seele.register = function (name, member) {
        if (_hiddenCouncil.hasOwnProperty(name))
            throw new Error("Memebers of SEELE cannot be replaced (I already have a plugin by that name)")

        _hiddenCouncil[name] = member
    }

    seele.enact = function (name, interface) {
        if (!Array.isArray(_agents[name]))
            _agents[name] = []
        _agantes[name].push(_hiddenCouncil[name](interface, this._cyanideTooth))
    }

    _this.seele = seele
})(this)
