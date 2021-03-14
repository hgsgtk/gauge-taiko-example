/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("<item> というタスクを追加する", async function(item) {
    await write(item, into(textBox("What needs to be done?")));
    await press('Enter');
});

step("View <type> tasks", async function (type) {
    await click(link(type));
});

step("Step を実行する", async function () {
    await press('Step');
});

step("パラメータ <param> を渡して、Step を実行する", async function (param) {
    await write(paramm, into(textBox("Write param here")));
    await press('Step');
});

step("Complete tasks <table>", async function (table) {
    for (var row of table.rows) {
        await click(checkBox(toLeftOf(row.cells[0])));
    }
});

step("Clear all tasks", async function () {
    await evaluate(() => localStorage.clear());
});

step("TODO管理アプリケーションを開く", async function() {
    await goto("todo.taiko.dev");
});

step("Must not have <table>", async function (table) {
    for (var row of table.rows) {
        assert.ok(!await text(row.cells[0]).exists(0, 0));
    }
});

step("<message> と表示されるべき", async function(message) {
    assert.ok(await text(message).exists(0, 0));
});

step("Add tasks <table>", async function (table) {
    for (var row of table.rows) {
        await write(row.cells[0]);
        await press('Enter');
    }
});

step("Must have <table>", async function (table) {
    for (var row of table.rows) {
        assert.ok(await text(row.cells[0]).exists());
    }
});

step("<arg0> 件プロポーザルを出したスピーカーは、自身が提出したプロポーザルの一覧で <arg1> 件のプロポーザルを確認できる", async function(arg0, arg1) {
    assert.ok(true)
});

step("プロポーザルの一覧にて次の情報を表示される <arg0>", async function(arg0) {
    assert.ok(true)
});

step("トーク時間に応じて収録開始・収録終了が表示される <arg0>", async function(arg0) {
    assert.ok(true)
});

step("レコーディング予約中のスピーカーは、レコーディング予約をキャンセルすることが出来る", async function() {
    assert.ok(true)
});

step("カンファレンス運営者は、採択済みのプロポーザルに対して、管理画面からメールを送信出来る", async function() {
    assert.ok(true)
});

step("採択されたスピーカーはメールを受け取り、採択可否の返答画面へアクセスできる", async function() {
    assert.ok(true)
});

step("プロポーザル提出者へ採択承諾のリマインドを送る <arg0>", async function(arg0) {
    // PHPUnitでのテストがチェックインされるまで
    throw 'Untested Scenario by PHPUnit';
    // チェックインされたら
    assert.ok(true, '当該UnitTestへのGitHub URL');
});

step("プロポーザル一覧画面を見る", async function() {
    // プロポーザル一覧画面へ遷移する
    await goto('https://fortee.jp/phperkaigi-2021/speaker/proposal/list')
});

step("タイトル <talkTitle> のプロポーザル詳細へ移動する", async function(talkTitle) {
	// 該当トークタイトルのプロポーザルのリンクをクリック
    await click(/* 指定条件 */)
});

step("<recordingTime> にレコーディング予約する", async function(recordingTime) {
	throw 'Unimplemented Step';
});

step("プロポーザル詳細画面でレコーディング時間に応じて収録開始・収録終了が表示される <arg0>", async function(arg0) {
	throw 'Unimplemented Step';
});

step("プロポーザル詳細画面からレコーディング予約をキャンセルする", async function() {
	throw 'Unimplemented Step';
});

step("手動テスト", async function() {
	assert.ok(true)
});