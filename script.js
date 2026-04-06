
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