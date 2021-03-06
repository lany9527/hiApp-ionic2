/**
 * Created by lja on 2016-4-21.
 */
import {Page, Loading, Translate, NavParams} from 'ionic-angular';
import {Http} from 'angular2/http';
import {platformDeviceHelper} from '../common/services/platform-device-helper';

@Page({
	templateUrl: 'build/pages/contacts/contact-detail.html'
})

export class ContactDetail {

	static get parameters() {
		return [[Http], [NavParams], [Translate]];
	}

	constructor(http, navParams, translate) {
		this.http = http;
		this.navParams = navParams;
		this.translate = translate;
		this.contact = this.navParams.data.contact;
		this.platformDeviceHelper = platformDeviceHelper;
	}
}
