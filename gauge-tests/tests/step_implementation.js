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
});

step("プロポーザルの一覧にて次の情報を表示される <arg0>", async function(arg0) {
});

step("トーク時間に応じて収録開始・収録終了が表示される <arg0>", async function(arg0) {
});

step("レコーディング予約中のスピーカーは、レコーディング予約をキャンセルすることが出来る", async function() {
});

step("カンファレンス運営者は、採択済みのプロポーザルに対して、管理画面からメールを送信出来る", async function() {
});

step("採択されたスピーカーはメールを受け取り、採択可否の返答画面へアクセスできる", async function() {
});

step("プロポーザル提出者へ採択承諾のリマインドを送る <arg0>", async function(arg0) {
});