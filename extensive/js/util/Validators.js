/**
 * @author schiesser
 */
Ext.apply(Ext.form.VTypes, {

    password : function(val, field) {
        if (field.initialPassField) {
            var pwd = Ext.getCmp(field.initialPassField);
            return (val == pwd.getValue());
        }
        return true;
    },

    passwordText : 'Passwörter stimmen nicht überein'
});
