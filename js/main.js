// *****************************************
// *****************************************
// MagiCircles
// *****************************************
// *****************************************

// *****************************************
// *****************************************
// Love Live!
// *****************************************
// *****************************************

// *****************************************
// *****************************************
// SIF2
// *****************************************
// *****************************************

function loadSIF2Card() {
    // Change sentences based on skill level
    $('.skill-per-card:not(.loaded)').each(function() {
        let skillDiv = $(this);
        skillDiv.addClass('loaded');
        let changeLevelP = skillDiv.find('.change-level');
        let levelSentenceSpan = skillDiv.find('.skill-level');
        let decreaseLevelButton = skillDiv.find('[href="#changeSkillLevelDecrease"]');
        let increaseLevelButton = skillDiv.find('[href="#changeSkillLevelIncrease"]');
        let sentences = window[skillDiv.data('skill-sentences-variable')];
        function changeLevel(level) {
            skillDiv.data('level', level);
            levelSentenceSpan.text(gettext('Level {level}').replace('{level}', level));
            skillDiv.find('.skill-sentence').html(sentences[level]);
            if (hasLevel(level - 1)) {
                decreaseLevelButton.removeClass('disabled');
            } else {
                decreaseLevelButton.addClass('disabled');
            }
            if (hasLevel(level + 1)) {
                increaseLevelButton.removeClass('disabled');
            } else {
                increaseLevelButton.addClass('disabled');
            }
        }
        function hasLevel(level) {
            let skill = skillDiv.find('.skill').last();
            return typeof(sentences[level]) != 'undefined';
        }
        changeLevel(1);
        if (hasLevel(2)) {
            changeLevelP.show();
            decreaseLevelButton.unbind('click');
            decreaseLevelButton.click(function(e) {
                e.preventDefault();
                if (hasLevel(skillDiv.data('level') - 1)) {
                    changeLevel(skillDiv.data('level') - 1);
                }
                decreaseLevelButton.blur();
                return false;
            });
            increaseLevelButton.unbind('click');
            increaseLevelButton.click(function(e) {
                e.preventDefault();
                if (hasLevel(skillDiv.data('level') + 1)) {
                    changeLevel(skillDiv.data('level') + 1);
                }
                increaseLevelButton.blur();
                return false;
            });
        }
    });
    // Remove statistics column on small screens
    if ($(document).width() <= 768) {
        $('[data-field="statistics"]:not(.loaded)').each(function() {
            let statsRow = $(this);
            statsRow.addClass('loaded');
            statsRow.find('.flex-tr').first().remove();
        });
    }
}

// *****************************************
// *****************************************
// All Stars
// *****************************************
// *****************************************

// *****************************************
// Cards

function loadALLSTARSCard() {
    // Change sentences based on skill level
    $('.skill-per-card:not(.loaded)').each(function() {
        let skillDiv = $(this);
        let changeLevelP = skillDiv.find('.change-level');
        let levelSentenceSpan = skillDiv.find('.skill-level');
        let decreaseLevelButton = skillDiv.find('[href="#changeSkillLevelDecrease"]');
        let increaseLevelButton = skillDiv.find('[href="#changeSkillLevelIncrease"]');
        function changeLevel(level) {
            skillDiv.data('level', level);
            levelSentenceSpan.text(gettext('Level {level}').replace('{level}', level));
            skillDiv.find('.skill').each(function() {
                let skill = $(this);
                let sentences = window['skill_sentences_' + skill.data('skill-id') + '_' + skill.data('language')];
                skill.find('.sentence').html(sentences[level]);
            });
            if (hasLevel(level - 1)) {
                decreaseLevelButton.removeClass('disabled');
            } else {
                decreaseLevelButton.addClass('disabled');
            }
            if (hasLevel(level + 1)) {
                increaseLevelButton.removeClass('disabled');
            } else {
                increaseLevelButton.addClass('disabled');
            }
        }
        function hasLevel(level) {
            let skill = skillDiv.find('.skill').last();
            let sentences = window['skill_sentences_' + skill.data('skill-id') + '_' + skill.data('language')];
            return typeof(sentences[level]) != 'undefined';
        }
        skillDiv.addClass('loaded');
        changeLevel(1);
        if (hasLevel(2)) {
            changeLevelP.show();
            changeLevelP.appendTo(skillDiv.closest('[data-field]').find('.long-text-title'));
            decreaseLevelButton.unbind('click');
            decreaseLevelButton.click(function(e) {
                e.preventDefault();
                if (hasLevel(skillDiv.data('level') - 1)) {
                    changeLevel(skillDiv.data('level') - 1);
                }
                decreaseLevelButton.blur();
                return false;
            });
            increaseLevelButton.unbind('click');
            increaseLevelButton.click(function(e) {
                e.preventDefault();
                if (hasLevel(skillDiv.data('level') + 1)) {
                    changeLevel(skillDiv.data('level') + 1);
                }
                increaseLevelButton.blur();
                return false;
            });
        }
    });
}

// *****************************************
// Collectible cards

function collectible_show_idolized_icon() {
    $('.h1-page-title-image-allstarscollectiblecard_add, .h1-page-title-image-allstarscollectiblecard_add_ajax').prop(
        'src', collectible_variables.icon_idolized_url);
}

function collectible_show_icon() {
    $('.h1-page-title-image-allstarscollectiblecard_add, .h1-page-title-image-allstarscollectiblecard_add_ajax').prop(
        'src', collectible_variables.image_url);
}

// *****************************************
// Seasons

// Rina boards
// function aprilFoolsTakeOverDivs() {
//     // Logo
//     $('.home-site-logo img').prop('src', 'https://i.imgur.com/viUyTyW.png');
//     // Homepage art
//     let arts = [
//         {
//             'url': 'https://i.imgur.com/w8N1kxP.png',
//             'gradient': true,
//             'side': 'left',
//             'position': { 'size': '150%', 'y': '40%', 'x': '100%' },
//         },
//         {
//             'url': 'https://i.imgur.com/w8N1kxP.png',
//             'gradient': true,
//             'side': 'right',
//             'position': { 'size': '150%', 'y': '40%', 'x': '0%' },
//         },
//     ];
//     setHomepageArt(arts[Math.floor(Math.random() * arts.length)]);
// }

// Costume desginers
function _aprilFoolsTakeOverDivs() {
    // Logo
    $('.home-site-logo img').prop('src', 'https://i.imgur.com/STkC3iu.png');
    // Homepage art
    let arts = [
        'https://i.idol.st/static/aprilfools/aprilfools.png',
        'https://i.idol.st/static/aprilfools/aprilfools1.png',
        'https://i.idol.st/static/aprilfools/aprilfools10.png',
        'https://i.idol.st/static/aprilfools/aprilfools11.png',
        'https://i.idol.st/static/aprilfools/aprilfools12.png',
        'https://i.idol.st/static/aprilfools/aprilfools2.png',
        'https://i.idol.st/static/aprilfools/aprilfools3.png',
        'https://i.idol.st/static/aprilfools/aprilfools4.png',
        'https://i.idol.st/static/aprilfools/aprilfools5.png',
        'https://i.idol.st/static/aprilfools/aprilfools6.png',
        'https://i.idol.st/static/aprilfools/aprilfools7.png',
        'https://i.idol.st/static/aprilfools/aprilfools8.png',
        'https://i.idol.st/static/aprilfools/aprilfools9.png',
    ];
    let random_art = arts[Math.floor(Math.random() * arts.length)];
    setHomepageArt({
        'url': random_art,
        'gradient': true,
        'side': 'left',
        'position': { 'size': '120%', 'y': '40%', 'x': '175%' },
        'about_url': random_art,
    });
}

// *****************************************
// TODO


// *****************************************
// Loaded in all pages

function mergedFilterIdolUnitSubUnit() {
    modalCuteFormSeparators({
        'by_value_prefixes': [
            ['idol', []],
            ['i_unit', [2]],
            ['i_subunit', [2]],
        ],
        'hr': true,
        'margin': true,
    });
}

function favoriteCharacterSeparators() {
    console.log('fav char sep');
    modalCuteFormSeparators({
        'callback_before': function(elts) {
            console.log('before');
        },
        'by_name_prefix_nth': [
            ['id_favorite_character', [0, 9, 18, 27, 78, 83]],
        ],
        'hr': true,
        'margin': false,
    });
}

$(document).ready(function() {
    //favoriteCharacterSeparators();
});

// // *****************************************
// // Utils for versions

// function onVersionChange(form, animation) { // todo
//     if (typeof version_prefixes == 'undefined' || typeof fields_per_version == 'undefined'
//         || !version_prefixes || !fields_per_version) {
//         return;
//     }
//     $.each(version_prefixes, function(version, prefix) {
//         let checkbox = form.find('#id_c_versions [value="' + version + '"]');
//         $.each(fields_per_version, function(i, field_name) {
//             let input = form.find('#id_' + prefix + field_name);
//             let field = input.closest('.form-group');
//             if (checkbox.prop('checked')) {
//                 field.show(animation);
//             } else {
//                 field.hide(animation);
//                 input.val('');
//             }
//         });
//     });
// }

// function loadVersions() { // todo
//     let form = $('[data-form-name$="_event"]');
//     onVersionChange(form);
//     form.find('#id_c_versions').change(function () { onVersionChange(form, 'slow') });
// }

// function onLocationChange(form){ // todo
//     let checkbox_h=form.find('#id_c_locations [value="hits"]');
//     let checkbox_d=form.find('#id_c_locations [value="daily"]');
//     let checkbox_b=form.find('#id_c_locations [value="bside"]');

//     form.find('#id_unlock').closest('.form-group').hide('fast');
//     form.find('#id_daily').closest('.form-group').hide('fast');
//     form.find('#id_b_side_master').closest('label').hide('fast');
//     form.find('#id_b_side_start').closest('.form-group').hide('fast');
//     form.find('#id_b_side_end').closest('.form-group').hide('fast');

//     if(checkbox_h.prop('checked')){
//         form.find('#id_unlock').closest('.form-group').show('fast');
//     }
//     else{
//         form.find('#id_unlock').val('');
//     }
//     if(checkbox_d.prop('checked')){
//         form.find('#id_daily').closest('.form-group').show('fast');
//     }
//     else{
//         form.find('#id_daily').val('');
//     }
//     if(checkbox_b.prop('checked')){
//         form.find('#id_b_side_master').closest('label').show('fast');
//         form.find('#id_b_side_start').closest('.form-group').show('fast');
//         form.find('#id_b_side_end').closest('.form-group').show('fast');
//     }
//     else {
//         form.find('#id_b_side_master').val('');
//         form.find('#id_b_side_start').val('');
//         form.find('#id_b_side_end').val('');
//     }
// }

// function loadSongs() { // todo
//     let form = $('[data-form-name$="_song"]');
//     onLocationChange(form);
//     form.find('#id_c_locations').change(function () { onLocationChange(form)});
// }

// function loadSIFCard() { // todo
//     // todo
//     $('[data-open-tab]').each(function() {
// 	$(this).unbind('click');
// 	$(this).click(function(e) {
// 	    $('[data-tabs="' + $(this).closest('.btn-group').data('control-tabs') + '"] .tab-pane').removeClass('active');
// 	    $('[data-tab="' + $(this).data('open-tab') + '"]').addClass('active');
// 	    $(this).blur();
// 	});
//     });
// }

// *****************************************
// MagiCollections

// // SIF Cards

// function loadSIFCardsFilters() {
//     let form = $('[id="filter-form-sif/card"]');
//     if (!form.data('loaded-separators')) {
//         formShowMore(form, 'card_type', false, 'search');
//         form.attr('data-loaded-separators', true);
//     }
// }

// function loadSIFCardForm() {
//     // todo: hide and show fields based on which skill is selected
//     // let form = $('[data-form-name="edit_sif/card"]');
//     // let skill_variables = [];
//     // form.find(); # todo
//     // fieldTogglesFields(, 'skill', {
//     //     ''
//     // });
// }

// // SIF Events

// function loadSIFEvent() {
//     function showClose(caret, text, original_name) {
//         caret.removeClass('glyphicon-triangle-bottom');
//         caret.addClass('glyphicon-triangle-top');
//         text.text(gettext('Close'));
//     }
//     function showOpen(caret, text, original_name) {
//         caret.removeClass('glyphicon-triangle-top');
//         caret.addClass('glyphicon-triangle-bottom');
//         text.text(gettext('Open {thing}').replace('{thing}', original_name));
//     }
//     function toggleVersion(table, version, prefix, toggle, original_name, animation) {
//         let caret = table.find('[data-field="' + prefix + 'image"] .glyphicon');
//         let text = table.find('[data-field="' + prefix + 'image"] .text-open');
//         let isOpen = table.find('[data-field="' + prefix + 'image"][data-opened="true"]').length > 0;
//         if (toggle) {
//             if (caret.hasClass('glyphicon-triangle-bottom')) {
//                 showClose(caret, text, original_name);
//             } else {
//                 showOpen(caret, text, original_name);
//             }
//         } else {
//             if (isOpen) {
//                 showClose(caret, text, original_name);
//             } else {
//                 showOpen(caret, text, original_name);
//             }
//         }
//         $.each(fields_per_version, function(_, field_name) {
//             let field = table.find('[data-field="' + prefix + field_name + '"]');
//             if (field_name != 'image') {
//                 field.find('td').first().css('border-left', '1px solid #ddd');
//                 field.find('td').last().css('border-right', '1px solid #ddd');
//                 if (toggle) {
//                     field.toggle(animation);
//                 } else {
//                     if (isOpen) {
//                         field.show(animation);
//                     } else {
//                         field.hide(animation);
//                     }
//                 }
//             }
//         });
//     }
//     if (typeof versions_prefixes != 'undefined' && typeof fields_per_version != 'undefined') {
//         $.each(versions_prefixes, function(version, prefix) {
//             // Version merged in
//             let merged_in_field = $('[data-field="' + prefix + 'merged_in"]');
//             if (merged_in_field.find('th h3').length == 0) {
//                 merged_in_field.find('th').html(
//                     '<h3>'
//                         + merged_in_field.find('th .verbose-name').html()
//                         + '<br><span class="text-muted">'
//                         + merged_in_field.find('th .verbose-name-subtitle').html()
//                         + '</span></h3>');
//                 merged_in_field.click(function(e) {

//                 });
//             }

//             // Version show/hide
//             let field = $('[data-field="' + prefix + 'image"]:not([data-version-handler="true"])');
//             if (field.length > 0) {
//                 let table = field.closest('table');
//                 field.attr('data-version-handler', true);
//                 let last_field = table.find('[data-field^="' + prefix + '"]').last();
//                 if (last_field.data('field') == prefix + 'image') {
//                     return ;
//                 }
//                 let original_name = field.find('th').text();
//                 field.find('th').html(
//                     '<h3>' + original_name
//                         + '<br><span class="text-muted">'
//                         + '<span class="glyphicon glyphicon-triangle-bottom"></span> <span class="text-open"></span>'
//                         + '</span></h3>');
//                 field.css('cursor', 'pointer');
//                 field.unbind('click');
//                 field.click(function(e) {
//                     e.preventDefault();
//                     toggleVersion(table, version, prefix, true, original_name, 'fast');
//                     return false;
//                 });
//                 toggleVersion(table, version, prefix, false, original_name);
//             }
//         });
//     }
// }

// // SIF Songs

// function loadSIFSongFilters() {
//     let form = $('[id="filter-form-sif/song"]');
//     if (!form.data('loaded-separators')) {
//         form.data('loaded-separators', true);
//         formOnChangeValueShow(form, 'i_sif_location', {
//             2: ['sif_b_side_master', 'sif_master_swipe'],
//         });
//     }
// }

// function loadSongForm() {
//     let form = $('[data-form-name="add_song"], [data-form-name="edit_song"], [data-form-name="add_sif/song"], [data-form-name="edit_sif/song"]');
//     if (!form.data('loaded-separators')) {
//         form.data('loaded-separators', true);
//         formOnChangeValueShow(form, 'sif_available', [
//             'i_sif_attribute',
//             'c_sif_versions',
//             'sif_release_date',
//             'sif_length',
//             'i_sif_location',
//             'sif_easy_notes',
//             'sif_easy_difficulty',
//             'sif_normal_notes',
//             'sif_normal_difficulty',
//             'sif_hard_notes',
//             'sif_hard_difficulty',
//             'sif_expert_notes',
//             'sif_expert_difficulty',
//         ]);
//         formOnChangeValueShow(form, 'i_sif_location', {
//             0: ['sif_unlock'],
//             1: ['sif_daily'],
//             2: [
//                 'sif_b_side_start', 'sif_b_side_end',
//                 'sif_b_side_master', 'sif_master_notes',
//                 'sif_master_difficulty', 'sif_master_swipe',
//             ],
//         });
//     }
// }
