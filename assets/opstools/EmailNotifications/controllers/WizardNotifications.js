
steal(
        // List your Controller's dependencies here:
        'appdev',
//        'opstools/EmailNotifications/models/Projects.js',
//        'appdev/widgets/ad_delete_ios/ad_delete_ios.js',
  //     '//opstools/EmailNotifications/views/WizardNotifications/WizardNotifications.ejs',
function(){

    // Namespacing conventions:
    // AD.Control.extend('[application].[controller]', [{ static },] {instance} );
    AD.Control.extend('opstools.EmailNotifications.WizardNotifications', {  

        init: function (element, options) {
            var self = this;
            options = AD.defaults({
				triggerNext: 'next'
				//templateDOM: '//opstools/EmailNotifications/views/WizardNotifications/WizardNotifications.ejs'
            }, options);
            this.options = options;

            // Call parent init
            this._super(element, options);

            this.dataSource = this.options.dataSource; // AD.models.Projects;

            this.initDOM();
            
            //// Add Activity Modal:
            this.modalAdd = this.element.find("#en-wizard-formNotification");

            var calendarOptions = {
                format: "mm/dd/yyyy",
                startDate: "01/01/1970",
                // toggleActive: false,
                // multidate: false,
            };
            this.modalAdd.find('#datetimepicker1').datepicker(calendarOptions);
           // this.modalAdd.find('#dateEnd').datepicker(calendarOptions);


        },



        initDOM: function () {

          //  this.element.html(can.view(this.options.templateDOM, {} ));

        },

		 'a.en-wiz-notifications-next click': function ($el, ev) {

            this.element.trigger(this.options.triggerNext);
            ev.preventDefault();
        },

        '.ad-item-add click': function ($el, ev) {

            ev.preventDefault();
        }


    });


});
