/**
 * @author schiesser
 */
Ext.ns('Extreme.components');

Extreme.components.createStaticLink = function(label, href) {
	return new Ext.BoxComponent({
		autoEl: {
			tag: 'a',
			cls: 'app-link',
			html: label,
			href: (href===undefined)?'#':href
		}
	});
};
