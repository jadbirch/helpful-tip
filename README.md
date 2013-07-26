helpful-tip
===========

Dynamically set-up tooltip definitions for your pre-defined keywords. Very helpful for uncommon jargon and terms that new visitors might not know about

### Prerequisites

A tooltip plugin. I recommend [Tooltipsy](http://tooltipsy.com/index).

### Usage

```javascript
jtip(
	info,
	attr,
	selector,
	object
);
```

info = the attribute in which your tooltip plugin looks for the tooltip info. Tooltipsy uses title (so you would use "title") but others may not. It's best to check this on your plugin's demo page or docs.

attr = the attribute by which your tooltip finds your tooltips. If you give your tooltips an id, just use "id" here.

selector = your tooltip selector. If you identify your tooltips with an id/class/rel of "tooltip", you would use "tooltip" here.

object = the object of key-values that provide definitions for keywords. You can provide this inline as `{ "key":"value"}` or with its name if pre-defined.

Example:

```javascript
jtip(
	"title", /* because I want my tooltip content (ie the text that is in the tooltip when hovered) to be shown in the title attribute */
	"rel", /* because my tooltip plugin identifies tooltips by their "rel" attribute */
	"tooltip", /* because my tooltip plugin makes tooltips from elements with a rel attribute of "tooltip" */
	{"define": "definition","book": "a book has paper"}
);
```

