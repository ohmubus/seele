;(function SEELE (_this) {
    var _hiddenCouncil = {} // plugin factories
      , _agents = {}        // plugin instances

    // this gets passed into each plugin. the plugin can then call it to
    // have seele destroy it at the end of its lifecycle
    var _cyanideCapsule = function _cyanideCapsule (name, _agent) {
        var _i = _agents[name].indexOf(_agent)
        _agents[name].splice(_i, 1)

        if (_agents[name].length === 0)
            delete _agents[name]
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
        if (!_hiddenCouncil.hasOwnProperty(name))
            throw new Error("Addressing a memeber of SEELE who is not belies your ignorance (no plugin by that name)")

        var _agent = _hiddenCouncil[name](interface, _falseTooth)

        function _falseTooth () {
            _cyanideCapsule(name, _agent)
        }

        if (!Array.isArray(_agents[name]))
            _agents[name] = []

        _agents[name].push(_agent)
    }

    _this.seele = seele // bind to window (or whatever)
})(this)
