module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    }
};

// { {format_date project.date_created } }