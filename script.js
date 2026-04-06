
const supabaseUrl = 'https://zqhgrxdqezgwabbdezvu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxaGdyeGRxZXpnd2FiYmRlenZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTQzMzIsImV4cCI6MjA5MTA3MDMzMn0.6vgig0UgLbeYD99w8bI2fgZOttvpPyrnSWBFvCaiS1E'
const supabaseclient = supabase.createClient(supabaseUrl, supabaseKey)

async function getCourses() {
    // This replaces your entire backend! 
    // It queries the 'courses' table directly from the browser.
    const { data, error } = await supabaseclient
        .from('courses')
        .select('*')

    if (error) {
        console.error('Error fetching:', error)
        return
    }

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    data.forEach(course => {
        tableBody.innerHTML += `
            <tr>
                <td>${course.Name}</td>
                <td>${course.Grade}</td>
            </tr>`;
    });
}

getCourses();

async function getCourses() {
    const filterValue = document.getElementById('semester-filter').value;
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Clear current rows

    let query = _supabase.from('courses').select('*');

    // Apply filter if a specific semester is chosen
    if (filterValue !== 'all') {
        query = query.eq('semester', filterValue);
    }

    const { data, error } = await query.order('course_code', { ascending: true });

    if (error) return console.error(error);

    // Calculate Average while building the table
    let totalGrade = 0;
    
    data.forEach(course => {
        totalGrade += course.grade;
        tableBody.innerHTML += `
            <tr>
                <td>${course.course_name}</td>
                <td>**${course.grade}%**</td>
            </tr>`;
    });

    const avg = data.length > 0 ? (totalGrade / data.length).toFixed(2) : 0;
    document.getElementById('avg-grade').innerText = avg;
}