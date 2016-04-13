# Seele

_Humans forget their foolishness and repeat their mistakes._

Plugin layer used as compositional mechanism for the various core parts of
cognition-framework.

Seele provides a `use(name, pluginFactorMethod)` method that registers a plugin
in an internal hash.

Seele provides access to the plugins so that Cognition/Catbus can pass a data
location into the needed plugin.

Lifecycle management for plugins (i.e. a `destroy` topic)?
Maintain references to the data locations?
Enforcement of the expressed contract that plugins must conform to?
