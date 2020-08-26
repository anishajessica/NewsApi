
##
1. run db.json in port 3000
2. e2e tests for first page done, ng e2e
3. unit tests are not done.

## Note to reviewer 
1. webpage is split into 3 parts - toolbar
                                 - Homepage
                                 - footer

2. Modules present - News-Stand
                   - forms
                   - Services

3. Components present - Footer
                      - toolbar
                      - favorite
                      - favorite page
                      - country page
                      - login form
                      - search result
4. favorites page is gaurded
                      - user1 , pass1
                      - user2 , pass2

5. functionalities :
    a. 3 layer toolbar
        i.   time and social media and logout button
        ii.  logo and title 
        iii. menu to switch countries, search bar, login, favorites page
    b. Routed Body
        i.   home- country page
        ii.  displays result when searched
        iii. right is flexed to display (sources-unauthorized, favorites-authorizes)
        iv.  Every news has a heart icon to add to favorite and more icon to read more
        v.   unauthorized will be redirected to login if tries to add/view favorite
        vi.  clicking heart in favorites page will remove favorite
    c. Footer 
        i.  time
        ii. social media