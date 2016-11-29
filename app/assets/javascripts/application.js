// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require maskmoney
//= require highcharts
//= require material
//= require dialog-polyfill
//= require_tree .


// For the floating labels
var pageLoad = function() {
	componentHandler.upgradeDom();

    // Money inputs
    $('[data-money]').each(function() {
        if(this.value) {
            this.value = parseFloat(this.value).toFixed(2);
        }
    });
    $('[data-money]').maskMoney();

    $('form').on('submit', function() {
        $(this).find('[data-money]').each(function() {
            this.value = $(this).maskMoney('unmasked')[0];
            $(this).maskMoney('destroy');
        });
    });
};

$(document).on('ready', pageLoad);
$(document).on('turbolinks:load', pageLoad);
