#!/usr/bin/node

const args = process.argv.slice(2); // ناخدو غير arguments الحقيقية

if (!args[0]) {
    console.log('No argument');
} else {
    console.log(args[0]);
}
