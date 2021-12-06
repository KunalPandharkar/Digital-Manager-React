import React from 'react'

export default function Bottomnavbar() {
    return (
        <div>
            <section>
                <div class="addtaskcont d-flex justify-content-center">

                    <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#addtask">
                        <span class="material-icons">
                            pending_actions
                        </span>
                    </button>

                    <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#addtask">
                        <span class="material-icons">
                            next_week
                        </span>
                    </button>

                    <button class="btn " data-bs-toggle="offcanvas" data-bs-target="#addtask">
                        <span class="material-icons">
                            add_circle_outline
                        </span>
                    </button>


                    <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#addtask">
                        <span class="material-icons">
                            fact_check
                        </span>
                    </button>

                    <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#addtask">
                        <span class="material-icons">
                            account_circle
                        </span>
                    </button>


                </div>
            </section>
        </div>
    )
}
