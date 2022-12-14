import { gql } from '../../appsync-service/'

export const updateEventMutation = params =>
  gql(`mutation MyMutation {
  updateEvent(${params}) {
    item {
        id
        zones
        users
        title
        locations {
          name
          points {
            coordinates
            type
          }
          id
        }
        client {
          address
          contact_email
          contact_name
          contact_phone
          created_at
          created_by_id
          deleted
          deleted_by_id
          enabled_features
          enabled_incident_types
          event_limit
          id
          licence_expiry
          name
          object_id
          staff_limit
          suspended
          updated_at
          updated_by_id
          deleted_on
          imported
        }
        client_id
        closed
        controlled_by_id
        created_at
        created_by_id
        custom_logo_file
        deleted
        deleted_by_id
        end_date
        event_code
        event_pin
        import_performance_id
        object_id
        overview
        public_report
        start_date
        updated_at
        updated_by_id
        venue_address
        venue_name
        updated_by {
          battery_percent
          battery_state
          client_id
          created_at
          created_by_id
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          device_token
          email
          email_verified
          first_name
          id
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          is_superuser
          last_login
          last_name
          location {
              coordinates
              type
          }
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
          imported
        }
        deleted_by {
          battery_percent
          battery_state
          client_id
          created_by_id
          created_at
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          device_token
          email
          email_verified
          first_name
          id
          imported
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          last_login
          last_name
          location {
              coordinates
              type
          }
          is_superuser
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
        }
        deleted_on
        created_by {
          battery_percent
          battery_state
          client_id
          created_at
          created_by_id
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          email
          device_token
          email_verified
          first_name
          id
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          is_superuser
          last_login
          last_name
          location {
              coordinates
              type
          }
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
          imported
        }
        controlled_by {
          battery_percent
          battery_state
          client_id
          created_at
          created_by_id
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          device_token
          email
          email_verified
          first_name
          id
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          is_superuser
          last_login
          last_name
          location {
              coordinates
              type
          }
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
          imported
        }
        capacity_total
        capacity_counter
        brief_file
        imported
      }
    }
}`)

export const createEventMutation = params =>
  gql(`mutation MyMutation {
  createEvent(${params}) {
    item {
        id
        zones
        users
        title
        locations {
          name
          points {
            coordinates
            type
          }
          id
        }
        client {
          address
          contact_email
          contact_name
          contact_phone
          created_at
          created_by_id
          deleted
          deleted_by_id
          enabled_features
          enabled_incident_types
          event_limit
          id
          licence_expiry
          name
          object_id
          staff_limit
          suspended
          updated_at
          updated_by_id
          deleted_on
          imported
        }
        client_id
        closed
        controlled_by_id
        created_at
        created_by_id
        custom_logo_file
        deleted
        deleted_by_id
        end_date
        event_code
        event_pin
        import_performance_id
        object_id
        overview
        public_report
        start_date
        updated_at
        updated_by_id
        venue_address
        venue_name
        updated_by {
          battery_percent
          battery_state
          client_id
          created_at
          created_by_id
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          device_token
          email
          email_verified
          first_name
          id
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          is_superuser
          last_login
          last_name
          location {
              coordinates
              type
          }
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
          imported
        }
        deleted_by {
          battery_percent
          battery_state
          client_id
          created_by_id
          created_at
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          device_token
          email
          email_verified
          first_name
          id
          imported
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          last_login
          last_name
          location {
              coordinates
              type
          }
          is_superuser
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
        }
        deleted_on
        created_by {
          battery_percent
          battery_state
          client_id
          created_at
          created_by_id
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          email
          device_token
          email_verified
          first_name
          id
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          is_superuser
          last_login
          last_name
          location {
              coordinates
              type
          }
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
          imported
        }
        controlled_by {
          battery_percent
          battery_state
          client_id
          created_at
          created_by_id
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          device_token
          email
          email_verified
          first_name
          id
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          is_superuser
          last_login
          last_name
          location {
              coordinates
              type
          }
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
          imported
        }
        capacity_total
        capacity_counter
        brief_file
        imported
      }
    }
}`)

export const deleteEventsMutation = params =>
  gql(`mutation MyMutation {
  deleteBatchEvents(${params}) {
    items {
        id
        zones
        users
        title
        locations {
          name
          points {
            coordinates
            type
          }
          id
        }
        client {
          address
          contact_email
          contact_name
          contact_phone
          created_at
          created_by_id
          deleted
          deleted_by_id
          enabled_features
          enabled_incident_types
          event_limit
          id
          licence_expiry
          name
          object_id
          staff_limit
          suspended
          updated_at
          updated_by_id
          deleted_on
          imported
        }
        client_id
        closed
        controlled_by_id
        created_at
        created_by_id
        custom_logo_file
        deleted
        deleted_by_id
        end_date
        event_code
        event_pin
        import_performance_id
        object_id
        overview
        public_report
        start_date
        updated_at
        updated_by_id
        venue_address
        venue_name
        updated_by {
          battery_percent
          battery_state
          client_id
          created_at
          created_by_id
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          device_token
          email
          email_verified
          first_name
          id
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          is_superuser
          last_login
          last_name
          location {
              coordinates
              type
          }
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
          imported
        }
        deleted_by {
          battery_percent
          battery_state
          client_id
          created_by_id
          created_at
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          device_token
          email
          email_verified
          first_name
          id
          imported
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          last_login
          last_name
          location {
              coordinates
              type
          }
          is_superuser
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
        }
        deleted_on
        created_by {
          battery_percent
          battery_state
          client_id
          created_at
          created_by_id
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          email
          device_token
          email_verified
          first_name
          id
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          is_superuser
          last_login
          last_name
          location {
              coordinates
              type
          }
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
          imported
        }
        controlled_by {
          battery_percent
          battery_state
          client_id
          created_at
          created_by_id
          current_event_app_role
          current_event_id
          date_joined
          deleted
          deleted_by_id
          deleted_on
          device_token
          email
          email_verified
          first_name
          id
          is_active
          is_in_geofence
          is_shift_manager
          is_staff
          is_superuser
          last_login
          last_name
          location {
              coordinates
              type
          }
          mobile_number
          name
          object_id
          permission_role
          pin
          pin_icon_url
          role
          suspended
          updated_at
          updated_by_id
          username
          imported
        }
        capacity_total
        capacity_counter
        brief_file
        imported
      }
    }
}`)

export const createIncidentMutation = params =>
  gql(`mutation MyMutation {
  createIncident(${params}) {
    item {
      archived
      archived_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        email
        email_verified
        first_name
        id
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      archived_by_id
      archived_date
      archived_text
      capture_data
      created_at
      created_by_id
      created_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        device_token
        email
        first_name
        id
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      debrief
      deleted
      deleted_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        device_token
        email
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        last_login
        is_superuser
        last_name
        location {
          coordinates
          type
        }
        name
        mobile_number
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      deleted_by_id
      deleted_on
      event_id
      event {
        object_id
      }
      id
      img_file
      imported
      incident_code
      incident_messages
      location {
        coordinates
        type
      }
      message_read_list
      object_id
      reported_by_id
      resolved
      resolved_by_id
      resolved_date
      resolved_image
      resolved_text
      status_value
      tags
      subscribed_users
      triaged
      triaging_allowed_users
      type_value
      updated_at
      updated_by_id
      user_views {
        created_at
        created_by_id
        id
        incident_id
        object_id
        updated_at
        updated_by_id
        user_id
        user {
          object_id
        }
        viewed_at
      }
      updated_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        device_token
        email
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        username
        updated_by_id
      }
      resolved_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        email
        device_token
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        permission_role
        object_id
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      reported_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        email
        device_token
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      last_message_created_at
    }
  }
}`)

export const updateIncidentMutation = params =>
  gql(`mutation MyMutation {
  updateIncident(${params}) {
    item {
      archived
      archived_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        email
        email_verified
        first_name
        id
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      archived_by_id
      archived_date
      archived_text
      capture_data
      created_at
      created_by_id
      created_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        device_token
        email
        first_name
        id
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      debrief
      deleted
      deleted_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        device_token
        email
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        last_login
        is_superuser
        last_name
        location {
          coordinates
          type
        }
        name
        mobile_number
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      deleted_by_id
      deleted_on
      event_id
      event {
        object_id
      }
      id
      img_file
      imported
      incident_code
      incident_messages
      location {
        coordinates
        type
      }
      message_read_list
      object_id
      reported_by_id
      resolved
      resolved_by_id
      resolved_date
      resolved_image
      resolved_text
      status_value
      tags
      subscribed_users
      triaged
      triaging_allowed_users
      type_value
      updated_at
      updated_by_id
      user_views {
        created_at
        created_by_id
        id
        incident_id
        object_id
        updated_at
        updated_by_id
        user_id
        user {
          object_id
        }
        viewed_at
      }
      updated_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        device_token
        email
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        username
        updated_by_id
      }
      resolved_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        email
        device_token
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        permission_role
        object_id
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      reported_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        email
        device_token
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      last_message_created_at
    }
  }
}`)

export const createIncidentMessageMutation = params =>
  gql(`mutation MyMutation {
  createIncidentMessage(${params}) {
    item {
        attachment
        created_at
        id
        message
        object_id
        sent_at
        updated_at
        user_id
        user {
          client_id
          current_event_id
          first_name
          id
          is_active
          last_name
          name
          object_id
          username
        }
        incident_id
        incident {
          object_id
          event {
            object_id
          }
        }
        created_by_id
        created_by {
          client_id
          current_event_id
          first_name
          id
          is_active
          last_name
          name
          object_id
          username
        }
        updated_by_id
        updated_by {
          client_id
          current_event_id
          first_name
          id
          is_active
          last_name
          name
          object_id
          username
        }
      }
    }
}`)

export const createMarkIncidentAsReadMutation = params =>
  gql(`mutation MyMutation {
  createMarkIncidentAsRead(${params}) {
    item {
      archived
      archived_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        email
        email_verified
        first_name
        id
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      archived_by_id
      archived_date
      archived_text
      capture_data
      created_at
      created_by_id
      created_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        device_token
        email
        first_name
        id
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      debrief
      deleted
      deleted_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        device_token
        email
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        last_login
        is_superuser
        last_name
        location {
          coordinates
          type
        }
        name
        mobile_number
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      deleted_by_id
      deleted_on
      event_id
      event {
        object_id
      }
      id
      img_file
      imported
      incident_code
      incident_messages
      location {
        coordinates
        type
      }
      message_read_list
      object_id
      reported_by_id
      resolved
      resolved_by_id
      resolved_date
      resolved_image
      resolved_text
      status_value
      tags
      subscribed_users
      triaged
      triaging_allowed_users
      type_value
      updated_at
      updated_by_id
      user_views {
        created_at
        created_by_id
        id
        incident_id
        object_id
        updated_at
        updated_by_id
        user_id
        user {
          object_id
        }
        viewed_at
      }
      updated_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        device_token
        email
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        username
        updated_by_id
      }
      resolved_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        email
        device_token
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        permission_role
        object_id
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      reported_by {
        battery_percent
        battery_state
        client_id
        created_at
        created_by_id
        current_event_app_role
        current_event_id
        date_joined
        email
        device_token
        email_verified
        first_name
        id
        imported
        is_active
        is_in_geofence
        is_shift_manager
        is_staff
        is_superuser
        last_login
        last_name
        location {
          coordinates
          type
        }
        mobile_number
        name
        object_id
        permission_role
        pin
        pin_icon_url
        role
        suspended
        updated_at
        updated_by_id
        username
      }
      last_message_created_at
    }
  }
}`)

export const createIncidentMessageAsReadMutation = params =>
  gql(`mutation MyMutation {
  createIncidentMessageAsRead(${params}) {
    item {
          archived
          archived_by {
            battery_percent
            battery_state
            client_id
            created_at
            created_by_id
            current_event_app_role
            current_event_id
            date_joined
            email
            email_verified
            first_name
            id
            is_active
            is_in_geofence
            is_shift_manager
            is_staff
            is_superuser
            last_login
            last_name
            location {
              coordinates
              type
            }
            mobile_number
            name
            object_id
            permission_role
            pin
            pin_icon_url
            role
            suspended
            updated_at
            updated_by_id
            username
          }
          archived_by_id
          archived_date
          archived_text
          capture_data
          created_at
          created_by_id
          created_by {
            battery_percent
            battery_state
            client_id
            created_at
            created_by_id
            current_event_app_role
            current_event_id
            date_joined
            device_token
            email
            first_name
            id
            is_active
            is_in_geofence
            is_shift_manager
            is_staff
            is_superuser
            last_login
            last_name
            location {
              coordinates
              type
            }
            mobile_number
            name
            object_id
            permission_role
            pin
            pin_icon_url
            role
            suspended
            updated_at
            updated_by_id
            username
          }
          debrief
          deleted
          deleted_by {
            battery_percent
            battery_state
            client_id
            created_at
            created_by_id
            current_event_app_role
            current_event_id
            date_joined
            device_token
            email
            email_verified
            first_name
            id
            imported
            is_active
            is_in_geofence
            is_shift_manager
            is_staff
            last_login
            is_superuser
            last_name
            location {
              coordinates
              type
            }
            name
            mobile_number
            object_id
            permission_role
            pin
            pin_icon_url
            role
            suspended
            updated_at
            updated_by_id
            username
          }
          deleted_by_id
          deleted_on
          event_id
          event {
            object_id
          }
          id
          img_file
          imported
          incident_code
          incident_messages
          location {
            coordinates
            type
          }
          message_read_list
          object_id
          reported_by_id
          resolved
          resolved_by_id
          resolved_date
          resolved_image
          resolved_text
          status_value
          tags
          subscribed_users
          triaged
          triaging_allowed_users
          type_value
          updated_at
          updated_by_id
          user_views {
            created_at
            created_by_id
            id
            incident_id
            object_id
            updated_at
            updated_by_id
            user_id
            user {
              object_id
            }
            viewed_at
          }
          updated_by {
            battery_percent
            battery_state
            client_id
            created_at
            created_by_id
            current_event_app_role
            current_event_id
            date_joined
            device_token
            email
            email_verified
            first_name
            id
            imported
            is_active
            is_in_geofence
            is_shift_manager
            is_staff
            is_superuser
            last_login
            last_name
            location {
              coordinates
              type
            }
            mobile_number
            name
            object_id
            permission_role
            pin
            pin_icon_url
            role
            suspended
            updated_at
            username
            updated_by_id
          }
          resolved_by {
            battery_percent
            battery_state
            client_id
            created_at
            created_by_id
            current_event_app_role
            current_event_id
            date_joined
            email
            device_token
            email_verified
            first_name
            id
            imported
            is_active
            is_in_geofence
            is_shift_manager
            is_staff
            is_superuser
            last_login
            last_name
            location {
              coordinates
              type
            }
            mobile_number
            name
            permission_role
            object_id
            pin
            pin_icon_url
            role
            suspended
            updated_at
            updated_by_id
            username
          }
          reported_by {
            battery_percent
            battery_state
            client_id
            created_at
            created_by_id
            current_event_app_role
            current_event_id
            date_joined
            email
            device_token
            email_verified
            first_name
            id
            imported
            is_active
            is_in_geofence
            is_shift_manager
            is_staff
            is_superuser
            last_login
            last_name
            location {
              coordinates
              type
            }
            mobile_number
            name
            object_id
            permission_role
            pin
            pin_icon_url
            role
            suspended
            updated_at
            updated_by_id
            username
          }
          last_message_created_at
        }
      }
  }`)
