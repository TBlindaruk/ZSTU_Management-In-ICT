/**
 * Created by tania on 26.06.16.
 */
$(document).ready(function () {

    $("body").click(function (event) {
        // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called
        if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
            $('.navbar-collapse').collapse('toggle');
        }
    });

});
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var viewModel = {
    program: [{
        topic: "Люди та спілкування",
        subjects: ['Результативне спілкування', 'Побудова команди та групова динаміка',
            'Бізнес-етика', 'Робота в стресових умовах. Управління стресом', 'Презентації та публічні виступи'],
        percentage: '30'
    }, {
        topic: "Планування та виконання проектів",
        subjects: ['Управління проектами (PMBoK)', 'Гнучкі методології', 'ITIL/ITSM'],
        percentage: '25'
    }, {
        topic: "Бізнес і ринки",
        subjects: ['Бізнес-аналіз', 'Розробка дизайну продукта', 'Розробка і маркетинг програмних продуктів', 'e-Commerce'],
        percentage: '15'
    }, {
        topic: 'Програмні пакети та інструменти',
        subjects: ['Офисні пакети', 'Пакети e-Commerce', 'Інструменти командної роботи'],
        percentage: '20'
    }, {
        topic: 'Обладнання та інфраструктура',
        subjects: ['Хостинг', 'Continuous Delivery'],
        percentage: '10'
    }]
};
for (var i in viewModel.program) {
    viewModel.program[i]['color'] = getRandomColor();
}

ko.bindingHandlers.topicsPercentage = {
    init: function (element, valueAccessor) {
        var value = valueAccessor().program;
        for (var i in value) {
            var div = $('<div>');
            div.css({
                'backgroundColor': value[i].color,
                'width': value[i]['percentage'] + '%',
                height: '100%',
                'display': 'inline-block'
            });
            div.text(value[i]['percentage'] + '%');
            var span = $('<span>');
            span.text(' '+ value[i]['topic']);
            span.appendTo(div);
            div.appendTo(element);
        }
    }
};
ko.applyBindings(viewModel);
