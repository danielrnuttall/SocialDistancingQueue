This is my submission for the UCT DevSoc Engagement Programme 
By NTTDAN001 (Daniel Nuttall)

About the app:
The idea of the app is to disband the long queues that are created outside shops when a shop is full due 
to Corona virus regulations. It also allows an employee to keep track of how many people are in-store.

The app is hosted on a firebase server and makes use of firebase cloud functions and a firestore database.

The app can be accessed by this link (app is hosted on Firebase): https://qno-social-distance-comp.web.app/ 

How it works:
1. The user (being an employee/security person) is prompted with a modal to enter the 
maximum number of people allowed in the shop at a time.

2. The user can then keep track of the number of people in-store by clicking the "+' or "-" buttons
when people enter or leave

3. If the store is full and no more people can enter, the user must enter any new customer's phone
number which is then added to a queue/list.
4. When more people may enter the store, the employee taps on the customer that is next in the queue,
and they receive a text message saying that they must enter the store.
5. The customer returns to the store (hopefully quickly) and do their shopping.

