/* ==========================================
   THREADED ADMIN DASHBOARD
========================================== */

let orders =
    JSON.parse(localStorage.getItem("braceletOrders")) || [];


/* ==========================================
   DASHBOARD
========================================== */

function updateDashboard() {

    document.getElementById("totalOrders")
        .textContent = orders.length;


    document.getElementById("processingOrders")
        .textContent =
        orders.filter(
            order =>
                order.orderStatus === "Processing"
        ).length;


    document.getElementById("deliveredOrders")
        .textContent =
        orders.filter(
            order =>
                order.orderStatus === "Delivered"
        ).length;


    document.getElementById("refundedOrders")
        .textContent =
        orders.filter(
            order =>
                order.paymentStatus === "Refunded"
        ).length;
}


/* ==========================================
   DISPLAY ORDERS
========================================== */

function displayAdminOrders() {

    const table =
        document.getElementById("adminOrders");


    if (orders.length === 0) {

        table.innerHTML = `

            <tr>

                <td colspan="9">
                    No orders received yet ♡
                </td>

            </tr>

        `;

        return;
    }


    table.innerHTML =
        orders.map((order, index) => {

            const braceletName =
                order.items
                    .map(item => item.name)
                    .join(", ");


            return `

                <tr>

                    <td>
                        <strong>
                            ${order.id}
                        </strong>
                    </td>


                    <td>
                        ${order.customer.name}
                    </td>


                    <td>
                        ${braceletName}
                    </td>


                    <td>
                        ₹${order.total}
                    </td>


                    <td>
                        ${order.paymentStatus}
                    </td>


                    <td>

                        <select
                            onchange="changeStatus(
                                ${index},
                                this.value
                            )"
                        >

                            <option
                                ${order.orderStatus === "Processing"
                                    ? "selected"
                                    : ""}
                            >
                                Processing
                            </option>

                            <option
                                ${order.orderStatus === "Ready"
                                    ? "selected"
                                    : ""}
                            >
                                Ready
                            </option>

                            <option
                                ${order.orderStatus === "Shipped"
                                    ? "selected"
                                    : ""}
                            >
                                Shipped
                            </option>

                            <option
                                ${order.orderStatus === "Delivered"
                                    ? "selected"
                                    : ""}
                            >
                                Delivered
                            </option>

                            <option
                                ${order.orderStatus === "Cancelled"
                                    ? "selected"
                                    : ""}
                            >
                                Cancelled
                            </option>

                            <option
                                ${order.orderStatus === "Delivery Failed"
                                    ? "selected"
                                    : ""}
                            >
                                Delivery Failed
                            </option>

                        </select>

                    </td>


                    <td>
                        ${order.dueDate}
                    </td>


                    <td>

                        <button
                            class="customer-btn"
                            onclick="showCustomer(${index})"
                        >
                            View
                        </button>

                    </td>


                    <td>

                        ${
                            order.paymentStatus === "Paid"
                            &&
                            (
                                order.orderStatus === "Cancelled"
                                ||
                                order.orderStatus === "Delivery Failed"
                            )

                            ?

                            `<button
                                class="refund-btn"
                                onclick="refundOrder(${index})"
                            >
                                Refund
                            </button>`

                            :

                            order.paymentStatus === "Refunded"
                            ?

                            "✓ Refunded"

                            :

                            "—"
                        }

                    </td>

                </tr>

            `;

        }).join("");
}


/* ==========================================
   CHANGE ORDER STATUS
========================================== */

function changeStatus(index, status) {

    orders[index].orderStatus = status;

    localStorage.setItem(
        "braceletOrders",
        JSON.stringify(orders)
    );


    displayAdminOrders();

    updateDashboard();

}


/* ==========================================
   CUSTOMER DETAILS
========================================== */

function showCustomer(index) {

    const customer =
        orders[index].customer;


    alert(

        `CUSTOMER DETAILS\n\n` +

        `Name: ${customer.name}\n` +

        `Email: ${customer.email}\n` +

        `Phone: ${customer.phone}\n\n` +

        `Address:\n${customer.address}\n` +

        `${customer.city} - ${customer.pincode}`

    );

}


/* ==========================================
   REFUND
========================================== */

function refundOrder(index) {

    const order = orders[index];


    const confirmRefund =
        confirm(

            `Refund ₹${order.total} to ${order.customer.name}?\n\n` +

            `Order: ${order.id}`

        );


    if (!confirmRefund) {
        return;
    }


    /*
        PROTOTYPE ONLY

        This changes the order status
        inside localStorage.

        It does NOT move real money.

        For a real website, this button
        must call your backend, which
        then calls the payment gateway's
        refund API.
    */


    order.paymentStatus = "Refunded";

    order.refundStatus = "Refund completed";


    localStorage.setItem(
        "braceletOrders",
        JSON.stringify(orders)
    );


    displayAdminOrders();

    updateDashboard();


    alert(
        "Refund marked as completed in the prototype. ♡"
    );
}


/* ==========================================
   START
========================================== */

displayAdminOrders();

updateDashboard();