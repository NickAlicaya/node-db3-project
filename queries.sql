-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select ProductName, CategoryName 
from Product
join Category on
Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.id, s.companyName
from shipper as s
join "order" as o on o.shipVia = s.id
where o.orderDate < "2012-08-09"
order by o.orderDate desc;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select p.productName, o.quantity
from orderDetail as o
join product as p on p.id = o.productId
where o.orderID = "10251"
order by p.ProductName asc

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.


select o.id, c.CompanyName, e.LastName 
from "order" as o
join customer as c on c.id = o.customerId
join employee as e on e.id = o.EmployeeId