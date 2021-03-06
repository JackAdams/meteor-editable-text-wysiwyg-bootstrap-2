WYSIWYG extension for babrahams:editable-text package
-----------------------------------------------------

This package provides a wysiwyg widget for editing text in-place. It is for apps that use **bootstrap-2**. (For apps that use bootstrap-3 use [this package](https://github.com/JackAdams/meteor-editable-text-wysiwyg-bootstrap-3) instead.)

Example app: [http://editable-text-demo.taonova.com](http://editable-text-demo.taonova.com)

Example app repo: [https://github.com/JackAdams/editable-text-example](https://github.com/JackAdams/editable-text-example)

#### Quick Start

	meteor add babrahams:editable-text-wysiwyg-bootstrap-2

You can then drop an editable text widget into any Blaze template with `wysiwyg=true`:

	{{> editableText collection="posts" field="body" wysiwyg=true}}
	
where "posts" is the name of the mongo collection and "body" is the name of a document field for the `posts` collection.

`collection` and `field` are mandatory fields.

Note: The widget assumes that the data context is that of a single document from the `posts` collection (with _id value included).

You can also set the data context explicitly as follows:

    {{> editableText context=singlePostDocument collection="posts" field="body"}}

where `singlePostDocument` can be a single post document already set in the current context, or provided by a template helper from the template that the widget was dropped into.

(You can use `document`, `doc`, `object`, `obj`, `data` or `dataContext` instead of `context` - go with whichever you prefer.)

#### Documentation

If you have `wysiwyg=true`, you can also set `toolbarPosition=top` (instead of the default which is at the bottom) and `showToolbar=true` (instead of the default where the toolbar is initially concealed).

If you want the wysiwyg toolbar on the top of editor (it's at the bottom by default), pass `toolbarPosition='top'` to the widget as follows:

    {{> editableText collection="posts" field="body" toolbarPosition='top'}}

Read the [full documentation](https://github.com/JackAdams/meteor-editable-text#editable-text-for-meteor) for the `babrahams:editable-text` package at [https://github.com/JackAdams/meteor-editable-text](https://github.com/JackAdams/meteor-editable-text).