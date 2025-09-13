#!/usr/bin/node

const args = process.argv.slice(2); // ناخدو غير arguments الحقيقية
const num = parseInt(args[0]); // نحولو أول argument إلى integer

if (isNaN(num)) {
    console.log('Not a number'); // إذا ماقدرتش تتحول إلى integer
} else {
    console.log('My number: ' + num); // إذا قدرت تتحول
}
