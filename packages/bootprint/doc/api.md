## API-reference

## Classes

<dl>
<dt><a href="#Bootprint">Bootprint</a></dt>
<dd></dd>
<dt><a href="#CouldNotLoadInputError">CouldNotLoadInputError</a></dt>
<dd><p>Class for a custom error message for a non-existing input source.
The class is identified in the CLI-script and show without stack-trace</p>
</dd>
</dl>

<a name="Bootprint"></a>

## Bootprint
**Kind**: global class  
**Access**: public  

* [Bootprint](#Bootprint)
    * [new Bootprint(customizeModule, config)](#new_Bootprint_new)
    * _instance_
        * [.run(input, targetDir, [options])](#Bootprint+run)
    * _static_
        * [.loadModule(moduleName)](#Bootprint.loadModule) ⇒ <code>function</code>
        * [.loadInput(fileOrUrlOrData)](#Bootprint.loadInput) ⇒ <code>\*</code>
        * [.kindOfInput(fileOrUrlOrData)](#Bootprint.kindOfInput)

<a name="new_Bootprint_new"></a>

### new Bootprint(customizeModule, config)
Create a new Bootprint-instance


| Param | Type | Description |
| --- | --- | --- |
| customizeModule | <code>function</code> | a customize module (like `require('bootprint-openapi)`) |
| config | <code>object</code> | a customize-configuration to merge after loading the module |

<a name="Bootprint+run"></a>

### bootprint.run(input, targetDir, [options])
Run the current engine with a

**Kind**: instance method of [<code>Bootprint</code>](#Bootprint)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> \| <code>string</code> | the input data (either the raw data as object, a filename as string or a url (string  starting with http/https) |
| targetDir | <code>string</code> |  |
| [options] | <code>object</code> |  |
| options.onlyEngine | <code>string</code> | only run a single customize-engine by its name (handlebars or less) |

<a name="Bootprint.loadModule"></a>

### Bootprint.loadModule(moduleName) ⇒ <code>function</code>
Load the template module. Try loading "bootprint-`moduleName`" first. If it does not exist
treat "moduleName" as path to the module (relative to the current working dir).

**Kind**: static method of [<code>Bootprint</code>](#Bootprint)  
**Returns**: <code>function</code> - the builder-function of the loaded module  

| Param | Type | Description |
| --- | --- | --- |
| moduleName | <code>string</code> | the name of the module to load |

<a name="Bootprint.loadInput"></a>

### Bootprint.loadInput(fileOrUrlOrData) ⇒ <code>\*</code>
Helper method for loading the bootprint-data

**Kind**: static method of [<code>Bootprint</code>](#Bootprint)  

| Param |
| --- |
| fileOrUrlOrData | 

<a name="Bootprint.kindOfInput"></a>

### Bootprint.kindOfInput(fileOrUrlOrData)
Returns 'data', 'url' or 'file' dependending on what kind of input t
the parameter is

**Kind**: static method of [<code>Bootprint</code>](#Bootprint)  

| Param |
| --- |
| fileOrUrlOrData | 

<a name="CouldNotLoadInputError"></a>

## CouldNotLoadInputError
Class for a custom error message for a non-existing input source.
The class is identified in the CLI-script and show without stack-trace

**Kind**: global class  

