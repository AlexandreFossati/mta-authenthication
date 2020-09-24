# mta-authenthication
The XSODATA fails when the XSUAA is active.

The problem: When the srv module requires the XSUAA and the app module contains authentication method "route" on the xs-app file, the app router still can call the XSJS (which doesn't have connection with the database), but fails on XSODATA (which have connection with the database).

The repository: This repository contains 2 folders on the root, both contains the same project.
There's only 3 difference between then:
- xs-security (on the root of both folders)
- xs-app (on the app module)
- server.js (line 5, anonymous: false / anonymous: true)
