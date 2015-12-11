;(function SEELE (_this) {
    var _hiddenCouncil = {} // plugin factories
      , _agents = {}        // plugin instances

    // this gets passed into each plugin. the plugin can then call it to
    // have seele destroy it at the end of its lifecycle
    function _cyanideTooth (_agent) {
        var _i = _agents.indexOf(_agent)
        _agents.splice(_i, 1)
    }

    var seele = {} // namespace

    // register a plugin by unique name
    seele.register = function (name, member) {
        if (_hiddenCouncil.hasOwnProperty(name))
            throw new Error("Memebers of SEELE cannot be replaced (I already have a plugin by that name)")

        _hiddenCouncil[name] = member
    }

    // elect to use a registered plugin by name and pass the interface object
    seele.use = function (name, interface) {
        if (!Array.isArray(_agents[name]))
            _agents[name] = []
        _agents[name].push(_hiddenCouncil[name](interface, this._cyanideTooth))
    }

    _this.seele = seele // bind to window (or whatever)
})(this)
