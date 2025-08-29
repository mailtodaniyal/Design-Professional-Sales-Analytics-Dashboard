        // Toggle sidebar
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const main = document.getElementById('main');
            sidebar.classList.toggle('sidebar-collapsed');
            main.classList.toggle('main-expanded');
        }

        // Toggle submenu
        function toggleSubmenu(element) {
            const parent = element.parentElement;
            const submenu = parent.querySelector('.submenu');
            submenu.classList.toggle('show');
        }

        // Show import modal
        function showImportModal() {
            document.getElementById('importModal').style.display = 'block';
        }

        // Hide import modal
        function hideImportModal() {
            document.getElementById('importModal').style.display = 'none';
        }

        // Process data import
        function processImport() {
            const fileInput = document.getElementById('fileInput');
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                // In a real implementation, you would process the file here
                // For this demo, we'll just show an alert
                alert(`File "${file.name}" selected for import`);
                hideImportModal();
            } else {
                alert('Please select a file first');
            }
        }

        // Export data
        function exportData(format) {
            // In a real implementation, this would generate the appropriate file
            alert(`Exporting data as ${format.toUpperCase()} file`);
            // Example: window.location.href = `/export?format=${format}`;
        }

        // Initialize charts
        document.addEventListener('DOMContentLoaded', function() {
            // Sales Chart
            const salesCtx = document.getElementById('salesChart').getContext('2d');
            const salesChart = new Chart(salesCtx, {
                type: 'line',
                data: {
                    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    datasets: [{
                        label: 'Sales',
                        data: [12000, 19000, 30000, 50000, 80000, 55000, 40000],
                        backgroundColor: 'rgba(67, 97, 238, 0.1)',
                        borderColor: '#4361ee',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#4361ee',
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: '#1e1e24',
                            titleFont: {
                                size: 14,
                                weight: 'bold'
                            },
                            bodyFont: {
                                size: 12
                            },
                            padding: 12,
                            cornerRadius: 8,
                            displayColors: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            },
                            ticks: {
                                callback: function(value) {
                                    return '$' + value.toLocaleString();
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });

            // Pipeline Chart
            const pipelineCtx = document.getElementById('pipelineChart').getContext('2d');
            const pipelineChart = new Chart(pipelineCtx, {
                type: 'bar',
                data: {
                    labels: ['Leads', 'Qualified', 'Proposal', 'Negotiation', 'Closed Won'],
                    datasets: [{
                        label: 'Sales Pipeline',
                        data: [1000, 800, 600, 400, 300],
                        backgroundColor: [
                            'rgba(67, 97, 238, 0.7)',
                            'rgba(76, 201, 240, 0.7)',
                            'rgba(72, 199, 142, 0.7)',
                            'rgba(248, 150, 30, 0.7)',
                            'rgba(247, 37, 133, 0.7)'
                        ],
                        borderColor: [
                            'rgba(67, 97, 238, 1)',
                            'rgba(76, 201, 240, 1)',
                            'rgba(72, 199, 142, 1)',
                            'rgba(248, 150, 30, 1)',
                            'rgba(247, 37, 133, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: '#1e1e24',
                            titleFont: {
                                size: 14,
                                weight: 'bold'
                            },
                            bodyFont: {
                                size: 12
                            },
                            padding: 12,
                            cornerRadius: 8,
                            displayColors: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });

            // Animate cards
            const cards = document.querySelectorAll('.animate-fadeIn');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });
